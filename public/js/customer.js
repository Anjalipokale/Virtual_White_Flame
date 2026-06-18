
function fmt(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}
function fmtNum(n, dec) {
  return parseFloat(n.toFixed(dec || 0)).toLocaleString('en-IN');
}

function calcROI() {
  var coalTons  = parseFloat(document.getElementById('coal-tons').value);
  var coalPrice = parseFloat(document.getElementById('coal-price').value);
  var bioPrice  = parseFloat(document.getElementById('bio-price').value);
  var eff       = parseFloat(document.getElementById('eff-factor').value);
  var invest    = parseFloat(document.getElementById('invest').value) || 0;

  if (!coalTons || !coalPrice || !bioPrice) {
    alert('Please fill all required fields.'); return;
  }

  var coalCost    = coalTons * coalPrice;
  var bioTons     = coalTons * eff;
  var bioCost     = bioTons * bioPrice;
  var monthlySave = coalCost - bioCost;
  var annualSave  = monthlySave * 12;
  var payback     = invest > 0 ? (invest / monthlySave) : 0;

  document.getElementById('r-coal-cost').textContent    = fmt(coalCost);
  document.getElementById('r-bio-cost').textContent     = fmt(bioCost);
  document.getElementById('r-monthly-save').textContent = fmt(monthlySave);
  document.getElementById('r-annual-save').textContent  = fmt(annualSave);
  document.getElementById('r-payback').textContent      = invest > 0
    ? fmtNum(payback, 1) + ' months'
    : 'N/A (no investment)';

  document.getElementById('roi-result').classList.add('show');
}

function calcCarbon() {
  var usage    = parseFloat(document.getElementById('cf-usage').value);
  var factor   = parseFloat(document.getElementById('cf-fuel').value);
  var industry = parseFloat(document.getElementById('cf-industry').value);

  if (!usage) { alert('Please enter monthly fuel usage.'); return; }

  var currentCO2 = usage * 1000 * factor * industry;
  var bioCO2     = usage * 1000 * 0.05;
  var saved      = currentCO2 - bioCO2;
  var annualSaved = saved * 12;
  var trees      = Math.round(annualSaved / 21.7);

  document.getElementById('cf-current').textContent = fmtNum(currentCO2 / 1000, 2) + ' tons CO₂';
  document.getElementById('cf-bio').textContent     = fmtNum(bioCO2 / 1000, 2) + ' tons CO₂';
  document.getElementById('cf-saved').textContent   = fmtNum(saved / 1000, 2) + ' tons CO₂';
  document.getElementById('cf-annual').textContent  = fmtNum(annualSaved / 1000, 2) + ' tons CO₂';
  document.getElementById('cf-trees').textContent   = fmtNum(trees, 0) + ' trees / year';

  document.getElementById('carbon-result').classList.add('show');
}


// =================== FUEL SAVING CALCULATOR ===================
// Paste this at the bottom of customer.js

var fuelData = {
  'coal':    { kcal: 4500,  unit: 'tons',   uLabel: 'Monthly Usage (tons)',   pLabel: 'Price (₹ / ton)',   hint: 'From your purchase bill' },
  'lignite': { kcal: 3500,  unit: 'tons',   uLabel: 'Monthly Usage (tons)',   pLabel: 'Price (₹ / ton)',   hint: 'From your purchase bill' },
  'diesel':  { kcal: 8600,  unit: 'litres', uLabel: 'Monthly Usage (litres)', pLabel: 'Price (₹ / litre)', hint: 'From your diesel invoice' },
  'furnace': { kcal: 9500,  unit: 'kg',     uLabel: 'Monthly Usage (kg)',     pLabel: 'Price (₹ / kg)',    hint: 'From your supplier bill' },
  'lpg':     { kcal: 11900, unit: 'kg',     uLabel: 'Monthly Usage (kg)',     pLabel: 'Price (₹ / kg)',    hint: 'From your supplier bill' },
  'png':     { kcal: 8500,  unit: 'm³',     uLabel: 'Monthly Usage (m³)',     pLabel: 'Price (₹ / m³)',    hint: 'From your gas meter bill' },
};

var BIOMASS_KCAL_PER_TON = 3900 * 1000; // 3900 kcal/kg × 1000 kg/ton

function getFuelKey() {
  return document.getElementById('fs-fuel-type').value.split('|')[0];
}

function updateFuelLabel() {
  var f = fuelData[getFuelKey()];
  document.getElementById('fs-usage-label').textContent = f.uLabel;
  document.getElementById('fs-price-label').textContent = f.pLabel;
  document.getElementById('fs-usage-hint').textContent  = f.hint;
  document.getElementById('fs-bio-qty').value = '';
  document.getElementById('fs-result').classList.remove('show');
}

function updateBioQty() {
  var f     = fuelData[getFuelKey()];
  var usage = parseFloat(document.getElementById('fs-usage').value);
  if (!usage) { document.getElementById('fs-bio-qty').value = ''; return; }

  // Convert usage to kcal — tons & kg need ×1000 to get kg, litres & m³ stay as-is
  var toKg       = (f.unit === 'tons') ? 1000 : (f.unit === 'kg') ? 1 : null;
  var totalKcal  = toKg ? usage * toKg * f.kcal : usage * f.kcal;

  var bioTons = totalKcal / BIOMASS_KCAL_PER_TON;
  document.getElementById('fs-bio-qty').value = bioTons.toFixed(2);
}

function calcFuelSaving() {
  var f         = fuelData[getFuelKey()];
  var usage     = parseFloat(document.getElementById('fs-usage').value);
  var fuelPrice = parseFloat(document.getElementById('fs-fuel-price').value);
  var bioPrice  = parseFloat(document.getElementById('fs-bio-price').value);

  if (!usage || !fuelPrice || !bioPrice) { alert('Please fill all fields.'); return; }

  updateBioQty();
  var bioTons     = parseFloat(document.getElementById('fs-bio-qty').value);
  var currentCost = usage * fuelPrice;
  var bioCost     = bioTons * bioPrice;
  var monthly     = currentCost - bioCost;
  var annual      = monthly * 12;
  var pct         = monthly > 0 ? ((monthly / currentCost) * 100).toFixed(1) : 0;
  var fuelName    = getFuelKey().charAt(0).toUpperCase() + getFuelKey().slice(1);

  document.getElementById('fs-r-fuel-label').textContent  = fuelName + ' used / month';
  document.getElementById('fs-fuel-qty-out').textContent  = usage.toLocaleString('en-IN') + ' ' + f.unit;
  document.getElementById('fs-bio-qty-out').textContent   = bioTons.toFixed(2) + ' tons';
  document.getElementById('fs-current-cost').textContent  = fmt(currentCost);
  document.getElementById('fs-bio-cost').textContent      = fmt(bioCost);
  document.getElementById('fs-monthly-save').textContent  = fmt(monthly);
  document.getElementById('fs-annual-save').textContent   = fmt(annual);
  document.getElementById('fs-saving-pct').textContent    = pct + '%';

  document.getElementById('fs-result').classList.add('show');
}
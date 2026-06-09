
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

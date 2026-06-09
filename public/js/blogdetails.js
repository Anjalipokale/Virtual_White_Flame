/* ══════════════════════════════════
   BLOG DATA (3 posts — one per category)
══════════════════════════════════ */
const blogs = [
  {
    id: 1,
    cat: 'sustainability',
    date: '09 Oct 2024',
    title: 'Biomass Fuels Over Fossil Fuels',
    img: '/img/blogimg1.png',
    tags: ['Biomass Energy', 'Fossil Fuels', 'Sustainability', 'Renewable']
  },
  {
    id: 2,
    cat: 'technology',
    date: '15 Oct 2024',
    title: 'The Dual Nature of Biomass Briquettes and Pellets: Benefits and Drawbacks',
    img: '/img/blogimg7.png',
    tags: ['Benefits', 'Drawbacks', 'Briquettes', 'Pellets']
  },
  {
    id: 3,
    cat: 'agriculture',
    date: '22 Oct 2024',
    title: 'The Role of Agricultural Waste in Biomass Briquette Production',
    img: '/img/blogimg9.png',
    tags: ['Agriculture', 'Waste', 'Briquette Production']
  },
];

let currentId = 1;

/* ── Build sidebar lists ── */
function buildSidebar(data) {
  ['sustainability', 'technology', 'agriculture'].forEach(cat => {
    const list  = document.getElementById('list-' + cat);
    const cnt   = document.getElementById('cnt-' + cat);
    const items = data.filter(b => b.cat === cat);
    cnt.textContent = items.length;
    list.innerHTML = items.map((b, i) => `
      <div class="blog-list-item ${b.id === currentId ? 'active-item' : ''}"
           data-id="${b.id}" onclick="selectBlog(${b.id})">
        <div class="active-bar"></div>
        <span class="item-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="item-info">
          <div class="item-title">${b.title}</div>
          <div class="item-date">${b.date}</div>
        </div>
      </div>
    `).join('');
  });

  /* hide empty groups */
  ['sustainability', 'technology', 'agriculture'].forEach(cat => {
    const items = data.filter(b => b.cat === cat);
    document.getElementById('grp-' + cat).style.display = items.length ? 'block' : 'none';
  });

  document.getElementById('noResults').style.display = data.length ? 'none' : 'block';
}

/* ── Select / load blog ── */
function selectBlog(id) {
  currentId = id;
  const b = blogs.find(x => x.id === id);
  if (!b) return;

  const isSus  = b.cat === 'sustainability';
  const isAgri = b.cat === 'agriculture';

  document.getElementById('bcCat').textContent     = catLabel(b.cat);
  document.getElementById('metaBadge').textContent  = catLabel(b.cat);
  document.getElementById('metaBadge').className    = 'meta-badge' + (isSus ? '' : ' ' + (isAgri ? 'agri' : 'tech'));
  document.getElementById('metaDot').style.background = isSus ? 'var(--g5)' : 'var(--o5)';
  document.getElementById('metaDate').textContent   = b.date;

  /* title */
  const titleEl = document.getElementById('blogTitle');
  titleEl.classList.remove('fade-in');
  void titleEl.offsetWidth;
  titleEl.textContent = b.title;
  titleEl.style.color = isSus ? 'var(--g1)' : 'var(--o1)';
  titleEl.classList.add('fade-in');

  /* image */
  const imgEl = document.getElementById('blogImg');
  imgEl.classList.remove('fade-in');
  void imgEl.offsetWidth;
  imgEl.src = b.img;
  imgEl.alt = b.title;
  imgEl.className = 'blog-hero-img fade-in' + (isSus ? '' : ' tech-img');

  /* body */
  const bodyEl = document.getElementById('blogBody');
  bodyEl.classList.remove('fade-in');
  void bodyEl.offsetWidth;
  bodyEl.innerHTML = getBody(id);
  bodyEl.classList.add('fade-in');

  /* tags */
  document.getElementById('tagRow').innerHTML = b.tags.map(t =>
    `<span class="tag">${t}</span>`
  ).join('');

  /* prev / next */
  document.getElementById('prevBtn').disabled = id <= 1;
  document.getElementById('nextBtn').disabled = id >= blogs.length;

  /* highlight active in sidebar */
  document.querySelectorAll('.blog-list-item').forEach(el => {
    el.classList.toggle('active-item', parseInt(el.dataset.id) === id);
  });

  /* scroll to top on mobile */
  if (window.innerWidth < 900) {
    document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
  }
}

function catLabel(cat) {
  return cat === 'sustainability' ? 'Sustainability'
       : cat === 'technology'     ? 'Technology'
       : 'Agriculture';
}

function getBody(id) {
  const content = {

    1: `<p>In today's world, the urgent need for sustainable energy sources has become increasingly apparent. Fossil fuels, such as coal, oil, and natural gas, have been the primary energy sources. But their use has led to significant environmental problems like climate change, air pollution, and water contamination. As a result, there is a growing interest in renewable energy alternatives. One such option that holds immense potential is biomass fuels.</p>
    <h2>What are Biomass Fuels?</h2>
    <p>Biomass fuels are derived from organic materials, such as plants, trees, and agricultural waste. These materials can be converted into various forms of energy. Biomass fuels offer several advantages over fossil fuels:</p>
    <ul>
      <li><strong>Reduced Greenhouse Gas Emissions:</strong> When biomass fuels are burned, they release carbon dioxide into the atmosphere. However, the carbon captured by the plants during their growth is often offsetting, making biomass fuels carbon neutral or even carbon negative.</li>
      <li><strong>Improved Air Quality:</strong> Biomass fuels generally produce fewer harmful emissions.</li>
      <li><strong>Energy Independence:</strong> By relying on biomass fuels, we can reduce dependence on oil and gas, enhancing energy security.</li>
      <li><strong>Economic Benefits:</strong> The production and use of biomass fuels can create jobs and stimulate local economies.</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Biomass fuels offer a compelling alternative to fossil fuels, providing renewable energy that can help mitigate climate change, reduce waste, and promote economic development. While challenges exist, the potential benefits of biomass make it an important part of the transition to a more sustainable energy future. By investing in biomass technology and sustainable practices, we can harness the power of organic materials to create a cleaner, greener world.</p>`,

    2: `<p>As the world increasingly turns to renewable energy sources, biomass briquettes and pellets have emerged as viable alternatives to fossil fuels. Understanding both their benefits and drawbacks is essential for making informed decisions.</p>
    <h2>Benefits</h2>
    <ul>
      <li><strong>Renewable Energy Source:</strong> Biomass briquettes and pellets are made from organic materials, making them a sustainable option that can be replenished.</li>
      <li><strong>Carbon Neutral:</strong> The carbon dioxide emitted during combustion is approximately equal to the carbon absorbed during the growth of the biomass, helping to mitigate climate change.</li>
      <li><strong>High Energy Density:</strong> Both briquettes and pellets have a high calorific value, making them efficient sources of energy for heating and power generation.</li>
      <li><strong>Waste Utilization:</strong> They utilize agricultural residues and waste materials, reducing landfill use and promoting waste management.</li>
      <li><strong>Clean Burning:</strong> When properly produced and burned, biomass briquettes and pellets emit lower levels of smoke and pollutants compared to traditional fossil fuels.</li>
      <li><strong>Ease of Storage and Transport:</strong> Their compact size and uniform shape make briquettes and pellets easy to handle, store, and transport.</li>
      <li><strong>Economic Benefits:</strong> The biomass industry can create local jobs and support rural economies, particularly in agricultural regions.</li>
    </ul>
    <h2>Drawbacks</h2>
    <ul>
      <li><strong>Initial Investment:</strong> Establishing biomass production facilities requires significant capital investment, which can be a barrier to entry.</li>
      <li><strong>Quality Control:</strong> The quality of biomass briquettes and pellets can vary depending on the feedstock used and production methods, affecting combustion efficiency.</li>
      <li><strong>Dependence on Raw Materials:</strong> Consistent availability of suitable biomass feedstock is crucial. Supply chain disruptions can impact production.</li>
      <li><strong>Moisture Sensitivity:</strong> Biomass briquettes and pellets can absorb moisture, which can lead to reduced heating efficiency and spoilage.</li>
      <li><strong>Market Volatility:</strong> Prices for biomass materials can fluctuate, affecting the financial viability of biomass production and utilization.</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Biomass briquettes and pellets offer numerous benefits as renewable energy sources, but they also come with challenges. Understanding these benefits and drawbacks is essential for making informed decisions about their use in sustainable energy solutions.</p>`,

    3: `<p>In the agricultural sector, the large-scale production of crops inevitably results in substantial waste byproducts. These agricultural residues, if not managed properly, can contribute to environmental degradation. However, effectively utilizing this waste to produce biomass briquettes presents a valuable opportunity.</p>
    <h2>Types of Agricultural Waste</h2>
    <p>Agricultural waste encompasses a variety of byproducts generated during the cultivation and processing of crops:</p>
    <ul>
      <li><strong>Residues from Grain Harvesting:</strong> After harvesting grains like wheat, rice, and barley, considerable amounts of straw and chaff are left behind. These materials can be shredded and compacted into briquettes, offering a sustainable fuel alternative.</li>
      <li><strong>Oilseed Residues:</strong> The production of oil from crops such as soybeans, sunflowers, and cotton generates seed cake and husks as byproducts. These residues have high energy content and can be transformed into biomass briquettes.</li>
      <li><strong>Fruit Waste:</strong> In fruit processing, significant amounts of peels, cores, and scraps are produced. These organic materials can be dried and pressed into briquettes, providing a secondary use for what would otherwise be discarded.</li>
      <li><strong>Sawdust and Wood Chips:</strong> The timber industry generates a considerable amount of wood waste, including sawdust and chips. These byproducts are ideal for briquette production, as they are easily compressed and offer high calorific value.</li>
    </ul>
    <h2>Conclusion</h2>
    <p>Utilizing agricultural waste for biomass briquette production not only helps manage waste effectively but also contributes to sustainable energy solutions. By transforming these residues into valuable fuel sources, we can reduce environmental impact and promote renewable energy use in various sectors. This approach not only fosters sustainability but also enhances economic viability for agricultural producers by creating additional revenue streams.</p>`,

  };
  return content[id] || '<p>Content coming soon...</p>';
}

/* ── Navigate prev/next ── */
function navigate(dir) {
  const newId = currentId + dir;
  if (newId >= 1 && newId <= blogs.length) selectBlog(newId);
}

/* ── Toggle accordion ── */
function toggleCat(btn, listId) {
  const list = document.getElementById(listId);
  const open = list.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

/* ── Search ── */
function handleSearch(q) {
  const term = q.toLowerCase().trim();
  const filtered = term
    ? blogs.filter(b =>
        b.title.toLowerCase().includes(term) ||
        b.cat.includes(term) ||
        b.date.toLowerCase().includes(term)
      )
    : blogs;
  buildSidebar(filtered);

  /* auto-expand all when searching */
  if (term) {
    ['sustainability', 'technology', 'agriculture'].forEach(cat => {
      const list = document.getElementById('list-' + cat);
      const btn  = list.previousElementSibling;
      list.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    });
  }
}

/* ── Init ── */
buildSidebar(blogs);
const urlId = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;
selectBlog(urlId);
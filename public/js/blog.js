function filter(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let visible = 0;
  document.querySelectorAll('.card').forEach((c) => {
    const match = cat === 'all' || c.dataset.cat === cat;
    c.style.display = match ? 'flex' : 'none';
    if (match) {
      c.style.animation = 'none';
      c.offsetHeight;
      c.style.animation = `fadeCard 0.35s ${visible * 0.05}s both`;
      visible++;
    }
  });
}
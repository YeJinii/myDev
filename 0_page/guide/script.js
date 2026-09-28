const sidebar = document.querySelector('#sidebar');
const menuToggle = document.querySelector('#menu-toggle');
const themeToggle = document.querySelector('#theme-toggle');
const searchInput = document.querySelector('#search-input');

menuToggle?.addEventListener('click', () => sidebar.classList.toggle('open'));
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('guide-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('guide-theme') === 'dark') document.body.classList.add('dark');

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(button => button.classList.remove('active'));
  item.classList.add('active');
  document.getElementById(item.dataset.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  sidebar.classList.remove('open');
}));

searchInput?.addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.hidden = query && !(`${card.textContent} ${card.dataset.search}`.toLowerCase().includes(query));
  });
});

document.querySelectorAll('.copy-code').forEach(button => button.addEventListener('click', async () => {
  const code = button.parentElement.querySelector('code').textContent;
  await navigator.clipboard.writeText(code);
  const original = button.textContent;
  button.textContent = 'Copied';
  setTimeout(() => { button.textContent = original; }, 1200);
}));

const sections = [...document.querySelectorAll('.doc-section')];
const tocLinks = [...document.querySelectorAll('.toc a')];
new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) tocLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-20% 0px -65% 0px' }).observe(sections[0]);
sections.slice(1).forEach(section => new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) tocLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-20% 0px -65% 0px' }).observe(section));

document.querySelectorAll('.component-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.component-tab').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  document.querySelectorAll('.component-panel').forEach(panel => { panel.hidden = true; panel.classList.remove('active'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const panel = document.getElementById(tab.dataset.panel);
  if (panel) { panel.hidden = false; panel.classList.add('active'); }
}));

const progressBar = document.getElementById('progress-bar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
  backTop?.classList.toggle('visible', window.scrollY > 420);
}, { passive: true });
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

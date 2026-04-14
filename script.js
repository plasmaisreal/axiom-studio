// Reveal on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));

// Nav + float btn scroll
const nav = document.getElementById('nav');
const fb = document.getElementById('floatBtn');
window.addEventListener('scroll', () => {
  const s = window.scrollY > 60;
  nav.style.boxShadow = s ? '0 2px 20px rgba(0,0,0,.08)' : 'none';
  if(window.scrollY > 400) fb.classList.add('show');
  else fb.classList.remove('show');
});

// FAQ toggle
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}
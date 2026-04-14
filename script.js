const obs = new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('vis');});},{threshold:.07,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>obs.observe(el));

const nav=document.getElementById('nav'),fc=document.getElementById('floatCta');
window.addEventListener('scroll',()=>{
  if(window.scrollY>80){nav.classList.add('solid');fc.classList.add('show');}
  else{nav.classList.remove('solid');fc.classList.remove('show');}
});
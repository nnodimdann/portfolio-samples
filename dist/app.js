document.getElementById('year').textContent = new Date().getFullYear();
const cards = document.querySelectorAll('.card,.metric,.panel');
const observer = new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible')}})},{threshold:.12});
cards.forEach((card)=>observer.observe(card));

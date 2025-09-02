// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting){
      e.target.classList.add('reveal-in');
      io.unobserve(e.target);
    }
  }
}, {threshold:.14});

document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

// Basic client-side form guard (progressive enhancement)
const form = document.querySelector('form');
form?.addEventListener('submit', (e)=>{
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = form.message.value.trim();
  if(!name || !email || !msg){
    e.preventDefault();
    alert('Please fill in all fields before sending.');
  }
});

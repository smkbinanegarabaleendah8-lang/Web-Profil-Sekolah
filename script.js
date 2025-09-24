// Animasi scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Slideshow otomatis
let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Ganti tiap 5 detik
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  // nama file halaman sekarang (lowercase), default ke index.html kalau kosong
  let current = window.location.pathname.split('/').pop().toLowerCase();
  if (!current) current = 'index.html';

  // bersihkan active lama
  links.forEach(a => a.classList.remove('active'));

  // coba cocokkan berdasar href relatif
  let matched = false;
  links.forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (href === current || (current === 'index.html' && (href === '' || href === 'index.html'))) {
      a.classList.add('active');
      matched = true;
    }
  });

  // fallback: cocokkan via URL absolut (kalau server menulis path berbeda)
  if (!matched) {
    links.forEach(a => {
      const abs = new URL(a.href);
      const file = abs.pathname.split('/').pop().toLowerCase();
      if (file === current) {
        a.classList.add('active');
        matched = true;
      }
    });
  }
});

// ============================
// Hamburger Menu
// ============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
}

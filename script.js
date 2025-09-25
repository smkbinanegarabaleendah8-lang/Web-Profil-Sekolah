// Animasi scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Slideshow otomatis (DENGAN PERBAIKAN)
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

// Hanya jalankan slideshow jika elemen 'mySlides' ada di halaman ini
if (slides.length > 0) {
  showSlides();
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Ganti tiap 5 detik
}

// Logika untuk menu aktif (sudah bagus, tidak perlu diubah)
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  let current = window.location.pathname.split('/').pop().toLowerCase();
  if (!current) current = 'index.html';

  links.forEach(a => a.classList.remove('active'));

  let matched = false;
  links.forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (href === current || (current === 'index.html' && (href === '' || href === 'index.html'))) {
      a.classList.add('active');
      matched = true;
    }
  });

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

// Sidebar toggle (Hamburger Menu)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Pastikan elemen hamburger ada sebelum menambahkan event listener
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Tutup sidebar setelah klik menu
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
}
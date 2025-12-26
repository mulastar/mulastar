const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle dropdown and icon
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.textContent = navLinks.classList.contains('active') ? '×' : '☰';
});

// Smooth scroll to sections
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu after click (on mobile)
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      menuToggle.textContent = '☰';
    }
  });
});

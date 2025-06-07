document.addEventListener('DOMContentLoaded', () => {
  // === 初始化 AOS 動畫 ===
  AOS.init({
    duration: 1000,
    once: true,
  });

  // === 啟用 simpleParallax 視差效果 ===
  const image = document.querySelector('.parallax-img');
  if (image) {
    new simpleParallax(image, {
      scale: 1.4,
      delay: 0.3,
      transition: 'cubic-bezier(0,0,0,1)',
    });
  }

  // === 返回頂部按鈕功能 ===
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

  // === 導覽列高度 ===
  const navbar = document.querySelector('.navbar');
  const offset = navbar.offsetHeight;

  document.querySelectorAll('section').forEach(section => {
    section.style.scrollMarginTop = `${offset}px`;
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });

// 打字動畫結束後，移除游標閃爍
document.getElementById('heroTitle').addEventListener('animationend', () => {
  document.getElementById('heroTitle').style.borderRight = 'none';
});

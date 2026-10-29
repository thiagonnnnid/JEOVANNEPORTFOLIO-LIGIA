const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    menuToggle.setAttribute('aria-expanded', String(aberto));
    menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    menuToggle.textContent = aberto ? '✕' : '☰';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('aberto');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      menuToggle.textContent = '☰';
    });
  });
}

// Destaque discreto do link correspondente à seção visível.
const links = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          const ativo = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('ativo', ativo);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach((section) => observer.observe(section));
}

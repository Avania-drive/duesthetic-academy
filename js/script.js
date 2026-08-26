// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Carousel arrows
document.querySelectorAll('.carousel-arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const carousel = document.getElementById(btn.dataset.target);
    const track = carousel.querySelector('.carousel-track');
    const card = track.querySelector('.phone-card');
    const gap = 20;
    const scrollAmount = (card ? card.offsetWidth : 230) + gap;
    track.scrollBy({
      left: btn.classList.contains('next') ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  });
});

// Modal "Más información" (formulario GHL)
const infoModal = document.getElementById('infoModal');
const modalClose = document.getElementById('modalClose');

function openInfoModal() {
  infoModal?.classList.add('open');
  infoModal?.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeInfoModal() {
  infoModal?.classList.remove('open');
  infoModal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.js-open-form').forEach(btn => {
  btn.addEventListener('click', openInfoModal);
});

modalClose?.addEventListener('click', closeInfoModal);

infoModal?.addEventListener('click', (e) => {
  if (e.target === infoModal) closeInfoModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeInfoModal();
});

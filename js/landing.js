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

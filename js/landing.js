// Todo va por delegación de eventos en document, en fase de captura (3er
// argumento "true"), y sin cachear referencias: más robusto frente a nodos
// que se añaden o reemplazan después de cargar este script, o frente a
// otros listeners que corten el evento con stopPropagation().

function openInfoModal() {
  const modal = document.getElementById('infoModal');
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeInfoModal() {
  const modal = document.getElementById('infoModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.js-open-form')) {
    openInfoModal();
    return;
  }
  if (e.target.closest('#modalClose')) {
    closeInfoModal();
    return;
  }
  if (e.target.id === 'infoModal') {
    closeInfoModal();
    return;
  }
  const arrow = e.target.closest('.carousel-arrow');
  if (arrow) {
    const carousel = document.getElementById(arrow.dataset.target);
    const track = carousel && carousel.querySelector('.carousel-track');
    if (!track) return;
    const card = track.querySelector('.phone-card');
    const gap = 20;
    const scrollAmount = (card ? card.offsetWidth : 230) + gap;
    track.scrollBy({
      left: arrow.classList.contains('next') ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }
}, true);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeInfoModal();
});

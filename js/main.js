const indicators = document.querySelectorAll('.carousel-indicators span');
const totalIndicators = indicators.length;
const cardWidth = 280; // largura aproximada do cartão + gap

track.addEventListener('scroll', () => {
  const scrollLeft = track.scrollLeft;
  const currentPage = Math.round(scrollLeft / (cardWidth * 5)); // 5 cartões por “página”
  
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentPage);
  });
});

// Tornar clicáveis
indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    track.scrollTo({ left: i * cardWidth * 5, behavior: 'smooth' });
  });
});

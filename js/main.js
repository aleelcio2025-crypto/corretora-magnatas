// js/main.js - Cole este código dentro do arquivo
document.addEventListener("DOMContentLoaded", function(){
    const track = document.querySelector(".seguros-track");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const cards = document.querySelectorAll(".seguro-card");
    const cardsPerView = 5;
    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 20}%)`;
    }

    prev.addEventListener("click", () => {
        index = Math.max(index - cardsPerView, 0);
        updateCarousel();
    });

    next.addEventListener("click", () => {
        index = Math.min(index + cardsPerView, cards.length - cardsPerView);
        updateCarousel();
    });

    // Animação de entrada dos cards
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 100);
    });
});
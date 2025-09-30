document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('star-container');
    const numberOfStars = 1000;

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 2 + 0.2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const animationDuration = Math.random() * 3 + 2;
        star.style.animationDuration = `${animationDuration}s`;
        const animationDelay = Math.random() * 5;
        star.style.animationDelay = `${animationDelay}s`;
        starContainer.appendChild(star);
    }








});
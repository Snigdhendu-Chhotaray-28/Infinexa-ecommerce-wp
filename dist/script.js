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

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    const tabs = document.querySelectorAll('.innerDiv .img .section ul li');
    const images = document.querySelectorAll('.innerDiv .imgs img');
    const tabSpans = document.querySelectorAll('.innerDiv .section ul li span');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t, i) => {
                t.classList.remove('w-64');
                t.classList.add('w-12');
                t.classList.add('border-b-2');
                if (tabSpans[i]) tabSpans[i].classList.add('hidden');
            });

            tab.classList.remove('w-12');
            tab.classList.remove('border-b-2');
            tab.classList.add('w-64');
            if (tabSpans[index]) tabSpans[index].classList.remove('hidden');

            images.forEach(img => {
                img.classList.add('hidden');
            });

            if (images[index]) {
                images[index].classList.remove('hidden');
            }
        });
    });

    function expBtnAnim(){
        const explor_btn = document.querySelector('.explor_btn');
        explor_btn.classList.add('explor_btn_anim');

        // Store the original gradient string from your CSS to reapply it
        // The gradient is defined in custom-style.css as part of .explor_btn_anim
        const originalGradient = `linear-gradient(70deg, #32e6e2 0%, #32e6e2 45%, #ffffff 50%, #32e6e2 55%, #32e6e2 100%)`;

        explor_btn.addEventListener('mouseenter', () => {
            explor_btn.style.animationPlayState = 'paused';
            explor_btn.style.backgroundImage = 'none'; // Remove the gradient image
            explor_btn.style.backgroundColor = 'var(--btn-bright-color)'; // Set the solid black background
        });

        explor_btn.addEventListener('mouseleave', () => {
            explor_btn.style.backgroundImage = originalGradient; // Restore the gradient image
            // You might also want to clear any specific background-color if it conflicts,
            // but the gradient will now cover it again.
            explor_btn.style.animationPlayState = 'running';
        });
    }
    expBtnAnim();

    function commentMovement() {
        const statementsElements = document.querySelectorAll('.statements');

        const observer = new IntersectionObserver((entries, observer) => {
            
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        statementsElements.forEach(el => observer.observe(el));
    }
    commentMovement();
});
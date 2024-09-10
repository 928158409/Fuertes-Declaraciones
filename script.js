document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const message = document.getElementById('message');
    const balloonsContainer = document.getElementById('balloons');

    noButton.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', () => {
        message.classList.remove('hidden');
        createBalloons();
    });

    function createBalloons() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
        for (let i = 0; i < 10; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.left = `${Math.random() * 90}vw`;
            balloon.style.bottom = `-${Math.random() * 30}vh`;
            balloon.innerText = '🎈';
            balloonsContainer.appendChild(balloon);
            animateBalloon(balloon);
        }
    }

    function animateBalloon(balloon) {
        const animation = balloon.animate([
            { transform: 'translateY(0)' },
            { transform: `translateY(-100vh)` }
        ], {
            duration: 5000 + Math.random() * 5000,
            iterations: Infinity
        });
    }
});

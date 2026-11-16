const reveals = document.querySelectorAll('.reveal');

let isChecking = false;

function checkReveals() {
    isChecking = false;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;

        const windowHeight = window.innerHeight;

        const revealPoint = 100;

        if (elementTop < windowHeight + revealPoint && elementBottom > revealPoint) { 
            reveal.classList.add('reveal_active'); 
        } else {
        
        }
    });
}

function scrollHandler() {
    if (!isChecking) {
        isChecking = true;
        window.requestAnimationFrame(checkReveals);
    }
}

window.addEventListener('load', checkReveals);
window.addEventListener('scroll', scrollHandler);
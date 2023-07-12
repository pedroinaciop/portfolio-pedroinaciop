function loading() {
    document.getElementsByClassName('box-load')[0].style.display = 'none'
    document.getElementsByClassName('content')[0].style.display = 'block'
    document.getElementsByClassName('btn')[0].style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
    let backToTopButton = document.getElementsByClassName('btn')[0]

    window.addEventListener('scroll', function () {
        if (window.scrollY > 160) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        scrollToTop(900);
    });

    function scrollToTop(duration) {
        let start = document.documentElement.scrollTop || document.body.scrollTop;
        let startTime = Date.now();

        function scrollToTopAnimation() {
            let currentTime = Date.now();
            let elapsedTime = currentTime - startTime;
            let scrollDuration = Math.min(duration, elapsedTime);

            document.documentElement.scrollTop = document.body.scrollTop = easeInOutCubic(scrollDuration, start, -start, duration);

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollToTopAnimation);
            }
        }
        
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
        requestAnimationFrame(scrollToTopAnimation);
    }
});

function darkMode() {
    //Modo dark-mode da gambiarra, logo atualizo!
    let checkBox = document.getElementById('darkmode-button')
    let titulos = document.getElementsByClassName('title')
    let title1 = titulos[0]
    let title2 = titulos[1]
    let title3 = titulos[2]
    let elements = document.getElementsByClassName('dark-mode')
    let body = elements[0]
    let header = elements[1]
    let h1 = elements[2]
    let h2 = elements[3]
    let h3 = elements[4]
    let sub = elements[5]
    let cel = elements[6]
    let mail = elements[7]
    let locale = elements[8]
    let contacts = document.getElementsByClassName('funcao')
    let tel = contacts[0]
    let email = contacts[1]
    let local = contacts[2]
    

    if (checkBox.checked == true) {
        body.style.background = '#0f0f0f'
        header.style.background = '#0f0f0f'
        h1.style.color = 'white'
        h2.style.color = 'white'
        h3.style.color = 'white'
        title1.style.color = 'white'
        title2.style.color = 'white'
        title3.style.color = 'white'
        sub.style.color = 'white'
        tel.style.color = 'white'
        email.style.color = 'white'
        local.style.color = 'white'
        cel.style.color = 'white'
        mail.style.color = 'white'
        locale.style.color = 'white'
        var java = document.querySelector('#html-img')
        java.setAttribute('src','imagens/html-dark-mode.png')

        var css = document.querySelector('#css-img')
        css.setAttribute('src','imagens/css-darkmode.png')

        var js = document.querySelector('#js-img')
        js.setAttribute('src','imagens/js-dark-mode.png')

    } else {
        body.style.background = 'white'
        header.style.background = 'white'
        h1.style.color = 'black'
        h2.style.color = 'black'
        h3.style.color = 'black'
        title1.style.color = 'black'
        title2.style.color = 'black'
        title3.style.color = 'black'
        sub.style.color = 'black'
        tel.style.color = 'black'
        email.style.color = 'black'
        local.style.color = 'black'
        locale.style.color = 'black'
        cel.style.color = 'black'
        mail.style.color = 'black'
        var java = document.querySelector('#html-img')
        java.setAttribute('src','imagens/html.png')

        var css = document.querySelector('#css-img')
        css.setAttribute('src','imagens/css.png')

        var js = document.querySelector('#js-img')
        js.setAttribute('src','imagens/js.png')
        //Modo dark-mode da gambiarra, logo atualizo!
    }
}

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

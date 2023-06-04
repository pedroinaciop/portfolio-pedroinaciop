function darkMode() {
    
    let checkBox = document.getElementById('darkmode-button')
    let teste = document.getElementById('pgmode')
    let teste1 = document.getElementById('pgmode1')
    let text = document.getElementById('text')
    let text1 = document.getElementById('text1')
    let text2 = document.getElementById('title-about_me')
    let text3 = document.getElementById('about_text')


    if (checkBox.checked == true){
        teste.style.background = '#0f0f0f'
        teste1.style.background = '#0f0f0f'
        text.style.color = 'white'
        text1.style.color = 'white'
        text2.style.color = 'white'
        text3.style.color = 'white'

    } else {
        teste.style.background = 'white'
        teste1.style.background = 'white'
        text.style.color = 'black'
        text1.style.color = 'black'
        text2.style.color = 'black'
        text3.style.color = 'black'
    }
}
// keydown активна при нажатии клавиши
// document.addEventListener('keydown', () => {
//     console.log(`Нажата клавиша ${event.code} ${event.key}`)
// })

// keyup активна при отпускании клавиши
// document.addEventListener('keyup', () => {
//     console.log(`Отжата клавиша ${event.code} ${event.key}`)
// })


// document.addEventListener('keydown', (event) => {
//     if (event.code == 'KeyC' && event.ctrlKey) {
//         console.log('Вы скопировали текст')
//         console.log(event.repeat)
//     }
// })

// const input = document.querySelector('.input1')
// const inpAtrib = input.getAttribute('maxlength')
// const span = document.querySelector('.span span')
// span.innerHTML = inpAtrib
// input.addEventListener('keyup', fun)
// input.addEventListener('keydown', (event) => {   ??????
//     if(event.repeat) {
//         fun()
//     }
// })

// function fun() {
//     const textCount = inpAtrib - input.value.lenght
//     console.log(input.value.lenght)
//     span.innerHTML = textCount
    
// }



// Скролл
// window.addEventListener('scroll', (event) => {
//     console.log(`${scrollY}px`)
// })


// события загрузки страницы
// DOMContentLoaded срабатывает сразу, не догружает страницу
document.addEventListener('DOMContentLoaded', dom)

// load срабатывает тогда когда вся страница была загружена
window.addEventListener('load', load)

function dom() {
    const input = document.querySelector('.input1')
    console.log(document.readyState)
    console.log('Дом загружен')
    console.log(input.offsetWidth)
}

function load () {
    const input = document.querySelector('.input1')
    console.log(document.readyState)
    console.log('Страница загружена')
    console.log(input.offsetWidth)
}

window.addEventListener('beforeunload', before)
function before (event) {
    event.preventDefault()
    event.returnValue = ''
}
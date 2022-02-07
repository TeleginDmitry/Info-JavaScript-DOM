const logo = document.getElementsByClassName('Logo')[0]

// Событие через on
// logo.onclick = () => {
//     console.log('Click')
// }

// addEventListener создаёт любое событие и не перезаписывает старое
// logo.addEventListener('click', function () {
//     console.log('Клик')
// })

// можно с начала создать функцию
// function showClick () {
//     console.log('Клак')
// }
// logo.addEventListener('click', showClick)



// removeEventListener прекращает дейсвтвие события

// logo.addEventListener('click', function fun() {
//     console.log('Клик')
//     logo.removeEventListener('click', fun)
// })



// У addEventListener есть доп параменты

// const options = {
//     'capture': false,// Фаза, на которой должен срабатывать обработчик
//     'once': true, // если true, тогда автоматически обработчик будет удалён после выполнения
//     'passive': false // если true, то указывает, что обработчик никогда не вызовет preventDefault()

// }

// logo.addEventListener('click', () => {
//     console.log('Клик был')
// }, options)

// function show() {
    // event.type тип события
    // console.log(event.type)

    // event.target обьект на котором сработал обработчик
    // console.log(event.target)

    // event.currentTarget обьект к которому назначен обработчик
    // console.log(event.currentTarget)

    // event.clientX положение курсора по оси X
    // console.log(event.clientX)

    // event.clientY положение курсора по оси Y
    // console.log(event.clientY)

    // все делали event
    // console.log(event)
// }

// logo.addEventListener('click', show)

// Погружение и всплытие

// const block = document.querySelector('.block')
// const blockInner = document.querySelector('.block__inner')
// const blockInnerInner = document.querySelector('.block__inner-inner')

// block.addEventListener('click', () => {
//     console.log('Клик на блок!')
    
// })
// blockInner.addEventListener('click', () => {
//     console.log('Клик на блок второго уровня!')
// })
// blockInnerInner.addEventListener('click', () => {
//     console.log('Клик на блок третьего уровня!')
// })


// Делегирование 1 способ не оптимизированный
// const li = document.querySelectorAll('li')
// function show1 () {
//     console.log('Я нажал на кнопку')
// }

// li.forEach((elem) => {
//     elem.addEventListener('click', show1)
// })


// Делегирование 2 способ, лучший

// const ul = document.getElementsByClassName('list')[0]

// function show1 () {
//     console.log('Я нажал на список')
// }


// ul.addEventListener('click', function (event) {
//     if (event.target.closest('.header__list_navigator')) {
//         show1()
//     }
// })


// const link = document.querySelector('.link1')

// // event.preventDefault() отменяет действия браузера
// link.addEventListener('click', (event) => {
//     console.log('Наши действия')
//     event.preventDefault()
// }, {'passive': true})


// const but = document.querySelector('.button')
// mousedown активна при нажатии, но не отпускании 
// but.addEventListener('mousedown', () => {
//     console.log('На кнопку нажали!')
// })

// click состоит из mousedown, но добавляется отпускание 
// but.addEventListener('click', () => {
//     console.log('Кнопку отпустили!')
// })

// contextmenu отлавливает нажатие любой кнопки
// but.addEventListener('contextmenu', () => {
//     console.log('Вызвано контексное меню')
// })





// НАВЕДЕНИЕ МЫШИ
// const block = document.querySelector('.block')
// mousemove срабатывает при наведении
// block.addEventListener('mousemove', () => {
//     block.innerHTML = `clientX ${event.clientX} <br> clientY ${event.clientY}`
// })


// mouseover срабатывает при наведении один раз
// block.addEventListener('mouseover', () => {
    // block.innerHTML = `Вы навели на обьект через mouseover`
    // console.log(event.target)

    // event.relatedTarget это элемент с которого курсор ушёл
//     console.log(event.relatedTarget)
// })


// mouseout срабатывает при убирании курсора с обьекта
// block.addEventListener('mouseout', () => {
    // block.innerHTML = `Вы убрали курсор с обьекта`
// })


// const wrapper = document.querySelectorAll('.wrapper')[0]

// mouseover и mouseout они всплывают при наведении на дочерний элемент
// wrapper.addEventListener('mouseover', () => {
//     console.log('Курсор над элементом')
// })

// wrapper.addEventListener('mouseout', () => {
//     console.log('Курсор уходит с элемента')
// })




// mouseenter такой же как mouseover только не всплывает на дочерних элементах
// wrapper.addEventListener('mouseenter', () => {
//     console.log('Курсор над элементом')
// })

// mouseleave такой же как mouseout только не всплывает на дочерниъ элементах
// wrapper.addEventListener('mouseleave', () => {
//     console.log('Курсор уходит с элемента')
// })


const calc = document.querySelector('.calc')

calc.addEventListener('mouseover', (event) => {
    const a = event.target.closest('li') 
    if (a) {
        a.style.cssText = `background-color: grey`
    } else {
        
    }
})
calc.addEventListener('mouseout', (event) => {
    const a = event.target.closest('li') 
    
    if (a) {
        a.style.cssText = ``
    } else {
        
    }
})
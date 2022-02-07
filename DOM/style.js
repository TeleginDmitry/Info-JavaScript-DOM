// className показывает все классы и если заменить, то удалит прежние названия классов
const Class = document.querySelector('.header__list_navigator')
const className = Class.className
Class.className = 'red'
console.log(Class)


const logo = document.querySelector('.Logo')

// classList.add добавить класс
logo.classList.add('link')

// classList.remove удоляет класс
logo.classList.remove('Logo')

// classList.toggle добавит класс если его нет, а если есть,то удолит
logo.classList.toggle('main')

// classList.contains проверяет наличие класса, возвращает true/false
const cont = logo.classList.contains('link')
console.log(cont)




// Добовляем стили

logo.style.color = 'blue'

// добавить много css сразу style.cssText, но это перезаписывает все свойства которые были в css

logo.style.cssText = `
    font-size: 20px;
    font-family: Arial;
    font-style: italic;
    color: grey;

`

// Получение стилей
const elementStyle = document.querySelectorAll('.header__list_navigator a')[1]

// Если оно записано в атрибуте style
console.log(elementStyle.style.fontSize)

// getComputedStyle возвращает вычесленные стили
const getStyle = getComputedStyle(elementStyle)
console.log(getStyle.fontSize)

// Стили псевдоэлемента
const getStyle1 = getComputedStyle(elementStyle, '::before')
console.log(getStyle1.backgroundColor)


// Лайфхак
// Получить число при получении стиля
const getStyle2 = getComputedStyle(elementStyle)
console.log(parseInt(getStyle2.fontSize))


// получение атрибута

const input = document.querySelector('.input')
const link1 = document.querySelector('.link1')

console.log(input.type)
console.log(link1.href)


// hasAttribute проверяет наличие атрибута
console.log(input.hasAttribute('class'))

// getAttribute получает значение атрибута
console.log(link1.getAttribute('href'))

// setAttribute устанавливает значение атрибута
input.setAttribute('name', 'inp')

// removeAttribute удоляет атрибут
link1.removeAttribute('href')



// переписывает data атрибут
console.log(input.dataset.size)
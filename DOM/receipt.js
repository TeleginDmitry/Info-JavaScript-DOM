// поиск по селектору класса
// querySelectorAll СТАТИЧЕСКАЯ, ИНФОРМАЦИЯ АКТУАЛЬНА НА МОМЕНТ ВЫЗОВА!!!
const elemsOne = document.querySelectorAll('.header__list_navigator')
console.log(elemsOne)

// поиск по смешанному селектору тегу и класса
const elemsTwo = document.querySelectorAll('div.header__list_navigator')
console.log(elemsTwo)

// поиск по тегу первого уровня
const elemsThree = document.querySelectorAll('.header__list_navigator>a>p')
console.log(elemsThree)

// поиск по нескольким классам
const elemsFour = document.querySelectorAll('.header__list_navigator, .Logo')
console.log(elemsFour)

// поиск по вложенным классам
const elemsFive = document.querySelectorAll('.header__navigator .list')
console.log(elemsFive)

// поиск по ID
const elemsSix = document.querySelectorAll('#listItem')
console.log(elemsSix)

// поиск по атрибуту
const elemsSeven = document.querySelectorAll('[type]')
console.log(elemsSeven)

// поиск по атрибуту со значением
const elemsEight = document.querySelectorAll('[type=Love]')
console.log(elemsEight)



const elems = document.querySelectorAll('li')
console.log(elems[2])

const subList = document.querySelectorAll('.list')
const subItems = subList[0].querySelectorAll('li')
console.log(subItems)



// querySelector ищет первый попавшийся элемент и сразу возвращает его

const lesson = document.querySelector('.header__list_navigator')
console.log(lesson)


// getElementById ищет обьект по ID
const byId = document.getElementById('listItem')
console.log(byId)




// ЖИВЫЕ МЕТОДЫ!!!
// getElementsByTagName ищет по тегу и возвращает живые обьекты
const byTag = document.getElementsByTagName('li')
console.log(byTag)



// getElementsByClassName ищет по классу и возвращает живые обьекты
const byClass = document.getElementsByClassName('contain')
console.log(byClass)



// getElementsByName ищет по name атрибуту и возвращает живые обьекты
const byName = document.getElementsByName('dima')
console.log(byName)


// -----------------------

// closest ищет ближайшего предка данного элемента
const elem = document.querySelector('.header__list_navigator')
const parentList = elem.closest('.contain')
console.log(parentList)


// matches проверяет на условие
const prover = document.querySelectorAll('li')
for (let i of prover) {
	if (i.matches('[class$=da]')) {
		console.log('Да,есть')
	} if (i.matches('[class$=net]')) {
		console.log('Нет,есть')
	} else {
		console.log('Нет ничего!')
	}
}
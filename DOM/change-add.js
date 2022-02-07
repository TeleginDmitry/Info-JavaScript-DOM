// innerHTML получаем содержимое обьекта
const textElement = document.querySelector('.header__list_navigator a')
const textElemenContent = textElement.innerHTML
textElement.innerHTML = `${textElemenContent} и работай в <span class='yellow'>Свободное</span> время`
const textElementContent = textElement.innerHTML
console.log(textElementContent)



// outerHTML Получаем содержимое обьекта и сам обьект
const net = document.querySelector('.net a')
const textNet = net.outerHTML
net.outerHTML = 'Раз два три'
console.log(textNet)



// textContent показывает только текст без тегов html
const textElements = document.querySelectorAll('.header__list_navigator a')[2]
const textElem = textElements.textContent
console.log(textElem)

textElements.textContent = 'Магазин'

// получаем комиентарий
const textCom = document.querySelector('.list')
const getComment = textCom.nextSibling
getComment.data = 'Привет'
console.log(getComment.data)

// ---------------------------------

// createElement создаёт новый элемента (Тега)
const newElement = document.createElement('div')
// наполняем новый тег
newElement.innerHTML = '<h1>Работа над собой</h1>'
console.log(newElement)

// createTextNode создание нового текстового узла
const textUzel = document.createTextNode('Привет!')
console.log(textUzel)


// добавление созданного обьекта на страницу

const logo = document.querySelector('.Logo')
const logoCreate = document.createElement('a')
logoCreate.innerHTML = ' Это очень круто'

// Вставка
// before вставить элемент перед обьектом
// logo.before(logoCreate)

// after вставить элемент после обьекта
// logo.after(logoCreate)

// prepend вставить внутрь обьекта и перед ним
// logo.prepend(logoCreate)

// append вставлить внутрь обьекта и после него
// logo.append(logoCreate, ' Дарова')

// insertAdjacentHTML вставляет сразу тект (Можно с тегами)
// logo.insertAdjacent(
//     'beforeend',
//     'Живи'
// )


// insertAdjacentText вставляет просто текст не видит теги
// logo.insertAdjacentText (
//     'afterbegin',
//     'Текс'
// )


// insertAdjacentElement вставляет ново созданный тег в элемент
// logo.insertAdjacentElement (
//     'afterbegin',
//     newElement
// )



// перенос существующего элемента
// const textCom2 = document.querySelector('.list')
// const textDiv = document.querySelector('div.header__list_navigator')
// textCom2.append(textDiv)



// клонирование элемента
const head = document.querySelector('.header__logo')
// Если в cloneNode указать параметром true, то элемент склонируется со своим содержимым
const cloneHead = head.cloneNode(true)
const textDiv = document.querySelector('div.header__list_navigator')
textDiv.prepend(cloneHead)


// удаление обьекта remove
const head1 = document.querySelectorAll('.header__logo')[1]
head1.remove()

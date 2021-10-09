// Окно при победе
function renderStatistics(ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
  ctx.fillRect(210, 20, 270, 250)

  ctx.fillStyle = '#fff'
  ctx.fillRect(200, 10, 270, 250)

  ctx.fillStyle = "#000"
  ctx.font = "18px PT Mono";
  ctx.fillText('Ура, вы победили', 210, 27)
  ctx.strokeStyle = "#F00";


  // график времени победы
  let startColumnPosition = 460
  let maxColumnsHeight = 150
  const timesList = []

  for (i = 0; i < 4; i++) {
    startColumnPosition -= 60
    let maxNum = Math.round(Math.max.apply(null, times))
    let timeItem = times[i] * maxColumnsHeight / maxNum

    ctx.fillStyle = "blue"
    ctx.fillRect(startColumnPosition, 85, 40, timeItem)

    ctx.fillStyle = "#000"
    ctx.font = "16px PT Mono";
    ctx.fillText(names[i], startColumnPosition, 50)

    let timeRound = Math.round(times[i])
    ctx.fillStyle = "#000"
    ctx.fillText(timeRound, startColumnPosition, 70)

    timesList.push(timeRound)
  }
}

// панель настройки персонажа
let firstNames = [
  'Ванек', 'Леха', 'Сеня', 'Васек', 'Гена', 'Димон', 'Никита', 'Санек', 'Витя', 'Андрюха'
]
let lastName = [
  'Макаров', 'Ильин', 'Морозов', 'Самойлов', 'Михеев', 'Анисимов', 'Романов', 'Пестов', 'Силин', 'Нестеров'
]

let сolor = [
  'red', 'blue', 'green', 'yellow', 'purple', 'gray', 'black'
]
let coatColor = сolor.slice()
let eyesColor = сolor.slice()


// функция рандомного номера в массиве
// избавление от дублирования кода
const randomGenerate = (array) => {
  return Math.floor(Math.random() * array.length)
}

// генерирую объект
// рандомное Имя, Фамилия из массивов и рандомный порядок Имя-Фамилия или Фамилия-Имя
// рандомный цвет глаз и плаща из массива
// все это объединяем в объект и return его
const generateDataWizard = () => {
  let currentFirstName = randomGenerate(firstNames)
  let currentLastName = randomGenerate(lastName)
  let currentCoatColor = randomGenerate(coatColor)
  let currentEyesColor = randomGenerate(eyesColor)

  let currentOrder = Math.round(Math.random())

  let fullName
  if (currentOrder) {
    fullName = String(`${firstNames[currentFirstName]} ${lastName[currentLastName]}`)
  } else {
    fullName = String(`${lastName[currentLastName]} ${firstNames[currentFirstName]}`)
  }

  let thisCoatColor = coatColor[currentCoatColor]
  let thisEyesColor = eyesColor[currentEyesColor]

  return currentWizart = {
    fullName,
    thisCoatColor,
    thisEyesColor
  }
}


let wizardsList = []
// Функция добавления данных в массив wizardsList
const addedItemsInWizardsList = () => {
  wizardsList.push(generateDataWizard())
}

// Добавление данных в массив
for (i = 0; i < 4; i++) {
  addedItemsInWizardsList()
}

let similarListEl = document.querySelector('.setup-similar-list')

let similarWizardTemp = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item')


const renderWizard = (wizard) => {
  // глубокое копирование шаблона
  let wizardEl = similarWizardTemp.cloneNode(true)

  // отображение мага в индивидуальных стилях
  wizardEl.querySelector('.setup-similar-label').textContent = wizard.fullName

  wizardEl.querySelector('.wizard-coat').style.fill = wizard.thisCoatColor

  wizardEl.querySelector('.wizard-eyes').style.fill = wizard.thisEyesColor

  return wizardEl
}

// добавление в блок сгенерированных объектов
for (i = 0; i < wizardsList.length; i++) {
  similarListEl.appendChild(renderWizard(wizardsList[i]))
}

// отображаю скрытые блоки
let userDialog = document.querySelector('.setup')
userDialog.classList.remove('hidden')

let similarUsers = document.querySelector('.setup-similar')
similarUsers.classList.remove('hidden')
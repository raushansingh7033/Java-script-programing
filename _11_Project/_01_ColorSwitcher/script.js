let randomBtn = document.querySelector('.randomBtn');
let colorInput = document.querySelector('#colorInput');
let applyBtn = document.querySelector('.applyBtn');
let currentColorValue = document.querySelector('.currentColorValue');
let container = document.querySelector('.container')

const colorArray = ['red', 'blue', 'yellow', 'lightseagreen', 'cyan', 'tomato', 'lightcoral', 'acqua', 'white', 'black', 'green']

const changeColor = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerText = color
}

const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length)
  return colorArray[randomNumber]
}

const handleRandomBtnClick = () => {
  let color = generateRandomColor()
  changeColor(color)
}

const handleApplyBtnClick = () => {
  let color = colorInput.value
  changeColor(color)

}


randomBtn.addEventListener('click', handleRandomBtnClick)

applyBtn.addEventListener('click', handleApplyBtnClick);




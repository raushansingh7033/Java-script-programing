

// event handling


// event handling
// phase 1 --> event, eventlistener,different events , event object
// phase 2 --> performance oriented --> event life cycle --> propagate  ,bubble, tickling , event delegation

// inline method
// property method
// Listener method




let firstButton = document.querySelector('.firstButton')
// firstButton.onclick = () => {
//   console.log("mai property method wala click hun")
// }

// firstButton.ondblclick = () => {
//   console.log("mai double click hua hu")
// }

// firstButton.addEventListener('click', () => {
//   console.log("ye wala event listener click")
// })
// firstButton.addEventListener('click', () => {
//   console.log("2 second event listener ye wala event listener click")
// })

// let showConsole = function () {
//   console.log("first")
// }

// firstButton.addEventListener('click', showConsole)
// firstButton.removeEventListener('click', showConsole)

// firstButton.addEventListener('click', (event) => {
//   console.log(event)
// })


// let show = function (event) {
//   console.log(event)
// }
// firstButton.addEventListener('click', show)


// let div1 = document.createElement('div');
// div1.style.cssText = 'background-color:red; width:200px; height:200px'
// body.append(div1)

// firstButton.addEventListener('mousedown', function () {
//   console.log("mousedown")
// })
// firstButton.addEventListener('mouseup', function () {
//   console.log("mouseUP")
// })

// firstButton.addEventListener('mouseleave', () => {
//   console.log("Mouse Leave")
// })


// let name = document.querySelector('.name')
// let form = document.querySelector('form');

// let btn = document.querySelector('.submitBtn')

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log("Submit ho gya")
// })

// name.addEventListener('blur', () => {
//   console.log("focus")
// })

// name.addEventListener('input', () => {
//   console.log(name.value)
// })


// let boxname = document.querySelector('.box')
// boxname.addEventListener('touchmove', () => {
//   console.log("first")
// })



// window.addEventListener('resize', () => {
//   console.log("first")
// })

// let h1 = document.createElement('h1');
// h1.innerHTML = "fuohvsnlkmsad"
// body.append(h1)

// h1.addEventListener('copy', () => {
//   console.log(window.getSelection().toString())
// })



// let decBtn = document.querySelector('.decBtn');
// let incBtn = document.querySelector('.incBtn')
// let counterValue = document.querySelector('.counterValue');
// decBtn.addEventListener('click', () => {
//   let value = Number(counterValue.innerText)
//   if (value <= 1) {
//     return;
//   }
//   counterValue.innerText = value - 1
// })
// incBtn.addEventListener('click', () => {
//   counterValue.innerText = Number(counterValue.innerText) + 1
// })


// form
let form = document.querySelector('form');
let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let submitBtn = document.querySelector('submitBtn')
let body = document.querySelector('body')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput || emailInput) {
    alert("fill all the details")
    return;
  }
  let div = document.createElement('div');
  div.innerHTML = `<p>${nameInput.value}</p>
 <p>${emailInput.value}</p>`
  body.append(div)
})




// console.log(document)
// console.dir(document.dir)

// let a = document.querySelector("div")
// console.log(a)


// //NodeList-->
// let Div = document.querySelector('div')
// console.log(Div)

/*
1. DOM
2. SELECTION
3. MANIPULATING THE HTML
4. MANIPULATING THE CSS
5. EVENT
*/

//let a1 = document.getElementsByTagName('div')
//console.log(a1)

// HTMLCollection and NodeList

// console.log(document.getElementById('heading'))

// console.log(document.getElementsByClassName('hii'))

// let a = document.querySelector('div')
// console.log(a)
// let b = document.querySelector('.hii')
// console.log(b)
// let find = document.querySelector("#finding")
// console.log(find.lastChild)
// text Node
// element node 
// comment node

// console.log(find.children)
// console.log(find.childNodes)

// tag -> change kar skte ho apni function bna ke
// attributes
// text
// element
// html


// how to manipulate html
// let h1 = document.querySelector('h1');
// console.log(h1.tagName) // tag name hi return karta hai
// console.log(h1.nodeName) // tag node comment node and text node
// console.log(h1.firstChild.nodeName)


// text change
// innerText
// innerContent

// h1.innerText = "You are doing well"
// console.log(h1.innerText)
// console.log(h1.textContent)

// // element
// h1.innerHTML = "<p>paragraph</p>"
// console.log(h1.innerHTML)
// console.log(h1.firstChild)

// Addition of element
// step creation of element
// let div = document.querySelector('div')
// let elem = document.createElement('p')
// elem.innerText = "New paragraph"
// step 2
// div.append(elem)
// div.prepend(elem)


// div ke bahar 
// div.after(elem)
// div.before(elem)

// div.insertAdjacentElement("beforeend", elem)

// let p = div.children[3]

// p.remove();

// parent Node

// let alpha = document.querySelector('#alpha')
// alpha.style.backgroundColor = 'blue'
// let parentNode = alpha.parentNode
// parentNode.append(elem)// # text # element # comment
// let newElem = document.createElement('div')
// newElem.innerText = "hello"
// parentNode.replaceChild(newElem, alpha)

// parentNode.removeChild(newElem)

// let lastpara = div.children[2];
// div.insertBefore(elem, lastpara)

// append
// prepend
// after
// before
// remove
// parentNode
// remove child
// replace child



// Attribute
// getAttribute(atr)
// setAttribute(str)
// let div = document.querySelector('.box')
// console.log(div.getAttribute('class'))
// console.log(div.attributes.class.value)

// console.log(div.attributes['class'].value)

// let classValue = div.getAttribute('class');

// div.setAttribute('class', `${classValue} random`)
// console.log(div.getAttribute('class'))

// let para = document.createElement('p');
// para.innerText = "i am going to patna"
// para.style.backgroundColor = "black"
// para.style.color = "green"
// para.setAttribute('style', 'background-color:black; color:green;')
// let body = document.querySelector('body')
// body.append(para)

// let button = document.createElement('button');
// button.innerText = 'click me'
// para.prepend(button)

// let div = document.querySelector('.box');
// div.setAttribute('class', `${div.getAttribute('class')} box2`)



// change the tag name
// tag ->text ->attribute
// let div = document.querySelector(".box");
// function changeTagName(oldNode, newTagName) {
//   if (oldNode instanceof Element) {
//     let para = document.createElement(newTagName)
//     para.innerHTML = oldNode.innerText;
//     for (let attribute of oldNode.attributes) {
//       console.log(attribute)
//       para.setAttribute(attribute.name, attribute.value)
//     }
//     oldNode.replaceWith(para)
//   } else {
//     console.log("Valid node")
//   }

// }

// changeTagName(div, 'p')

// CSS MANIPULATION  --> CLASS AND STYLE 
// attribute method
//let div = document.querySelector('div');
// div.setAttribute('style', 'background-color:red')
// div.setAttribute('class', 'redbg');

// div.style.backgroundColor = 'blue'
// div.style.fontSize = '60px'

// div.style.cssText = 'background-color:red; color:white'

// div.className = 'redbg'

// div.classList.add('redbg')
// div.classList.add('bluebg')
// div.classList.remove('bluebg')
// let isAvailbale = div.classList.contains('bluebg')
// div.classList.toggle('bluebg')
// div.classList.toggle('bluebg')
// console.log(div.classList)

// create a simple theme changing functionality

// let button = document.createElement('button');
// button.innerHTML = 'Click me'
// let body = document.querySelector('body')
// body.append(button);
// let theme = 'light'
// button.addEventListener('click', () => {
//   if (theme === 'light') {

//     body.style.backgroundColor = 'black'
//     body.style.color = 'white'
//     theme = 'black'
//   } else {
//     body.style.backgroundColor = 'white'
//     body.style.color = 'black'
//     theme = 'light'
//   }
// })



// let button = document.createElement('button')
// button.innerHTML = 'click me'
// let body = document.querySelector('body')

// body.append(button)
// button.addEventListener('click', () => {
//   if (body.className === 'dark') {
//     body.className = 'light'
//   } else {
//     body.className = 'dark'
//   }
// })

// button.addEventListener('click', () => {
//   body.classList.toggle('dark')
// })



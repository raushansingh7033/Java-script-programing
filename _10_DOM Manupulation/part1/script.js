/*

5 phases of dom manipulation
1. DOM
2. Selection of Html Elements
3. How to change or manipulate HTML
4. CSS ko kaise change kar skte
5. Event Listener s(event ko kaise suna jaaye)

*/

// let a = document.querySelector("h1")

// console.log(a)

// let para = document.querySelector("p")
// console.log(para)



// let para = document.querySelector("h1")
// para.innerHTML = "<h1> i have done home </h1>"
// para.style.backgroundColor = "green"
// console.log(para)

// let paragraph = document.querySelector('p')
// paragraph.innerHTML = "YOu have to work hard"

// paragraph.style.backgroundColor = "green"

// let h1 = document.querySelector('h1')
// h1.addEventListener('click', () => {
//   h1.style.backgroundColor = 'green'
//   h1.style.color = 'green'
// })


// console.log(paragraph)
// h1.innerHTML = "i am learning javascript"

// let a = document.querySelector('h1')
// a.innerHTML = "werifnsk"
// a.style.fontSize = "80px"
// a.addEventListener('click', () => {
//   console.log("jbsmkvncxkjnv")
//   a.innerHTML = "whbsfjvdilk, vsajvjnnjingyftcdrxsxdgfhjh"
// })

let para = document.querySelector("p")

let btn = document.querySelector("button")
btn.addEventListener('click', () => {
  para.style.backgroundColor = "yellow"
  para.style.scale = 1
})

let off = document.querySelector(".offButton")
off.addEventListener('click', () => {
  para.style.backgroundColor = "red"
  para.style.scale = 0.5
})

// console.warn()
// console.info()
// console.error()
// window object is global object

// confirm("DO you want to do?")

// DOM -> Document Object Model
//BOM -> Browser Object Model


document.querySelector(" ")
   
// let grandParent = document.querySelector('.grand-parent')
// let parent = document.querySelector('.parent')
// let child = document.querySelector('.child')


// child.addEventListener('click', function () {
//   alert('child pe kam hua')
// }, true)

// parent.addEventListener('click', function () {
//   alert("parent pe click hua")
// }, true)

// grandParent.addEventListener('click', function () {
//   alert('Grand parent')
// }, true)
// root -> child trickling phase 

// capturing phase

//target phase
// bubbling phase --> by Default 

// event 
// event.currentTarget --> kis par event listener attached hai
// this -> normal function me currentTarget and arrow function me window ka object deta hai



// child.addEventListener('click', function (event) {
//   console.log(event.target)
//   console.log(event.currentTarget)
// })

// parent.addEventListener('click', function (event) {
//   alert("parent pe click hua")
//   console.log(event.target)
//   console.log(event.currentTarget)
// })

// grandParent.addEventListener('click', function (event) {
//   console.log(event.target)
//   console.log(event.currentTarget)
// })

//

// child.addEventListener('click', function (event) {
//   console.log(event.target)
//   console.log(event.currentTarget)
//   console.log(this)
// })


// how to stop propagation and bubbling


// child.addEventListener('click', function (event) {
//   console.log(event.target)
//   console.log(event.currentTarget)
// }, true)

// parent.addEventListener('click', function (event) {
//   alert("parent pe click hua")
//   console.log(event.target)
//   console.log(event.currentTarget)

// }, true)

// grandParent.addEventListener('click', function (event) {
//   console.log(event.target)
//   console.log(event.currentTarget)
//   //event.stopPropagation()
//   event.stopImmediatePropagation()
// }, true)




// event delegation
// 

let container = document.querySelector('.container')
// container.childNodes.forEach((elem) => {
//   elem.addEventListener('click', function () {
//     console.log(elem.innerText)
//   })
// })

container.addEventListener('click', function (event) {
  // console.log(event.target)
  let targetElem = event.target;
  // if (event.target.classList.contains('box')) {
  if (targetElem.className === 'box') {
    console.log(event.target.textContent)
  }
})



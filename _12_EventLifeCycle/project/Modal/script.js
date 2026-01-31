let openModalBtn = document.querySelector('.openModalBtn')
let modalContainer = document.querySelector('.modalContainer')
openModalBtn.addEventListener('click', () => {
  modalContainer.style.display = "flex";
})
// let closeModalBtn = document.querySelector('.closeModalBtn')
// closeModalBtn.addEventListener('click', () => {
//   modalContainer.style.display = "none";
// })

modalContainer.addEventListener('click', (event) => {
  if (event.target.className === 'modalContainer')
    modalContainer.style.display = 'none'
})



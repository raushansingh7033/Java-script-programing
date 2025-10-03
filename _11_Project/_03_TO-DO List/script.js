let listContainer = document.querySelector('.listContainer')
let addInput = document.querySelector('#addInput')
let addBtn = document.querySelector('.addBtn')

let list = [

]

// read
function renderList(arr) {
  listContainer.innerHTML = ''
  list.map(obj => {
    let divElem = document.createElement('div');
    divElem.classList.add('list');
    divElem.innerHTML = `
    <p>${obj.text}</p>
  
    `
    let buttonElem = document.createElement('Button');
    buttonElem.innerHTML = 'Delete'
    buttonElem.onclick = () => {
      handleRemoveList(obj.id)
    }
    let editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'

    editBtn.onclick = () => {
      let newText = prompt("Enter new text", obj.text);
      if (newText && newText.trim() !== "") {
        handleUpdateList(obj.id, newText.trim())
      }
    }

    divElem.append(buttonElem, editBtn)

    listContainer.append(divElem)
  })
}

renderList(list)

// create 
function handleAddList() {
  let obj = {
    id: Date.now(),
    text: addInput.value
  }
  list.unshift(obj)

  renderList(list)
}
addBtn.addEventListener('click', handleAddList);

//delete   concept//event delegation

function handleRemoveList(id) {
  let filteredList = list.filter((obj) => {
    return obj.id !== id
  })
  list = filteredList;
  renderList(list)
  console.log(filteredList)
}


//Update

function handleUpdateList(id, newText) {
  list = list.map(obj => {
    if (obj.id === id) {
      return { ...obj, text: newText }
    }
    return obj
  })
  renderList(list)
}

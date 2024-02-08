const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
  if(inputBox.value === ''){
    alert("you must write something!")
  }else {
    let li = document.createElement("li");
    li.innerHTML= inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  inputBox.value =  "";
  saveData()
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName  ===  'LI'){
    e.target.classList.toggle("checked")
    saveData()
  }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
    saveData()
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showData();

// const input = document.getElementById("input");
// const todo = document.getElementById("todo");
// let array = [];
// const add = (e) => {
//   e.preventDefault();
//   array.push({ nameTask: input.value, complete: false });
// };
// todo.addEventListener("click", add);
// console.log(array);

// const demo = document.getElementById("demo");
// const todoList = (item) => {
//   demo.innerHTML = "";
//   array.forEach((todo) => demo.append(add(todo, item)));
// };

let taskCreater = document.getElementById("task-creator");
let form = document.getElementsByClassName("form")[0];
let tasks = document.getElementById("tasks");
let task = document.getElementsByClassName("task")
let save = document.getElementById("save");
let title = document.getElementById("title");
let description = document.getElementById("description");
let low = document.getElementById("low")
let medium = document.getElementById("medium")
let high = document.getElementById("high")



taskCreater.onclick = () => {
  form.classList.toggle("form-toogle");
};

let emptyArr = []
let formData = {}


const taskCreation = (title, description, importance, indexPosition) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("task");

  let textDiv = document.createElement("div");
  textDiv.classList.add("text-container");

  let smallestTitle = document.createElement("h6");
  smallestTitle.innerText = "lololo";

  let taskTitle = document.createElement("h2");
  taskTitle.innerText = `${title.value}`;

  let textContent = document.createElement("h4");
  textContent.innerText = `${description.value}`;

  textDiv.appendChild(smallestTitle);
  textDiv.appendChild(taskTitle);
  textDiv.appendChild(textContent);

  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("editing-btns");

  let btnFinish = document.createElement("button");
  btnFinish.innerText = "F";
  btnFinish.setAttribute("id", "close");
  let btnClose = document.createElement("button");
  btnClose.innerText = "X";
  btnFinish.setAttribute("id", "finish");

  buttonDiv.append(btnFinish);
  buttonDiv.append(btnClose);

  newDiv.append(textDiv);
  newDiv.append(buttonDiv);

  tasks.append(newDiv);
  tasks.children[indexPosition].classList.add(importance)

  formData.title = title.value
  formData.description = description.value
  formData.importance = importance
  emptyArr.push(formData)
console.log(emptyArr)

formData = {}
};

save.onclick = () => {
    let classProperty = "";

    if(low.checked) {
        classProperty = "low"
    }

    if(medium.checked) {
        classProperty = "medium"
    }

    if(high.checked) {
        classProperty = "high"
    }

    let index = tasks.children.length

  if (title.value !== "" && description.value !== "") { 
    taskCreation(title, description, classProperty, index);
    title.value = "";
    description.value = "";
    classProperty = "" 
  }


};

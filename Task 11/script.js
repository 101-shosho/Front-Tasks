let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");


addBtn.onclick = function(){

let taskText = input.value;


if(taskText === ""){
return;
}


let li = document.createElement("li");


let span = document.createElement("span");
span.innerText = taskText;


let doneBtn = document.createElement("button");
doneBtn.innerText = "Done";
doneBtn.className = "done";
doneBtn.onclick = function(){
span.classList.toggle("completed");
}


let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className = "delete";
deleteBtn.onclick = function(){
li.remove();
}


li.appendChild(span);
li.appendChild(doneBtn);
li.appendChild(deleteBtn);


list.appendChild(li);

input.value = "";
}
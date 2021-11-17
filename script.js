function openTask({ target }) {
    // Add a new task to list
    target.classList.add('hide')
    let inputDiv = document.querySelector('#input');
    inputDiv.classList.add('active');
}
let openBtn = document.querySelector('#open');
openBtn.addEventListener('click', openTask);

function addTask() {
    //add the text by creating a template literal and hardcoding the li and adding it to the list
    
    let holder = document.querySelector('taskInput');
    if(holder === '') {
        alert('You must add a task');
        return;
    }

    let text = document.createTextNode(holder);
    let addText = `<li class="task "> ${text} <i class="delete far fa-trash-alt" id="deleteBtn"></i></li>`;
    let taskList = document.querySelector('.tasks');

    taskList.append(addText);
    // //check if element is empty if it is return a msg
    // let newTask = document.querySelector('#taskInput').value;
    // if(newTask === ''){ 
    //     alert('You must add a task');
    //     return ;
    // } 
    // let li = document.createElement('li');
    // let text = document.createTextNode(newTask);
    // //add input text to list element
    // li.appendChild(text);
    // //add item to list
    // document.querySelector('.tasks').appendChild(li);

    // //create delete button
    // let i = document.createElement('i');
    // i.classList.add('delete');
    // i.classList.add('far');
    // i.classList.add('fa-trash-alt');
    // li.appendChild(i);
    // //add task class
    // li.classList.add('task');
}
let add = document.querySelector('#add');
add.addEventListener('click', addTask)

function closeTask() {
    //Closes the input window
    let removeHide = document.querySelector('.hide')
    removeHide.classList.remove('hide');
    let inputDiv = document.querySelector('#input');
    inputDiv.classList.remove('active');
}
let closeBtn = document.querySelector('#close')
closeBtn.addEventListener('click', closeTask)

function deleteTask({ target }) {
    // delete task from list
    //  Get it to specify which one is being clicked look into onclick 
    let par = target.parentElement;
    par.style.display = 'none';
}
let deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', deleteTask)

function completeTask({target}) {
    //  Cross off task
    //  Get it to specify which one is being clicked look into onclick 
    if(target.classList.contains('task')) target.classList.add('complete');
}
let complete = document.querySelector('.task');
complete.addEventListener('click', completeTask);
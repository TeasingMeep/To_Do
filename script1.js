//add delete button to task
let liItems = document.getElementsByTagName('li');
for(let i = 0; i<liItems.length; i++) {
    let icon = document.createElement('i');
    icon.className = 'delete';
    icon.classList.add('delete');
    icon.classList.add('far');
    icon.classList.add('fa-trash-alt');
    liItems[i].appendChild(icon);
}

//Hide specific task 
let deleteTask = document.getElementsByClassName('delete');
for(i = 0; i < deleteTask.length; i++){
    deleteTask[i].onclick = function() {
        let del = this.parentElement;
        del.style.display = 'none';
    }
}

//Check off Task
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if(event.target.classList.contains('task')) {
        event.target.classList.add('complete');
    }
},false);

//Add new task
function addTask() {
    
    let input = document.getElementById('taskInput').value;
    if(input === '') {
        return alert('No task found');
    }
    let li = document.createElement('li')
    let text = document.createTextNode(input);
    li.appendChild(text);
    li.classList.add('task');

    document.querySelector('.tasks').appendChild(li);
    document.getElementById('taskInput').value = '';

    let icon = document.createElement('i');
    icon.className = 'delete';
    icon.classList.add('delete');
    icon.classList.add('far');
    icon.classList.add('fa-trash-alt');
    li.appendChild(icon);

    for(i = 0; i < deleteTask.length; i++){
        deleteTask[i].onclick = function() {
            let del = this.parentElement;
            del.style.display = 'none';
        }
    }
}

//Add Time
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if(hour == 0) {
        hour = 12;

    }
    let currentTime = hour + ":" + min + ":" + sec ;

    document.getElementById('time').innerHTML = currentTime;
}
showTime()

//set date 
// function setDate() {
//     // let date = new Date();
//     // let month = date.getMonth()+1;
//     // let day = date.getDate();
//     // let year = date.getFullYear();

//     // let currDate = month+day+', '+year;
//     // document.getElementById('date').innerHTML = currDate;
// }

// setDate();
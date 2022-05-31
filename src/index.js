// import _ from 'lodash';
import './style.css';

const toDoLlistDiv = document.querySelector('.to-do-list');
const toDoListUl = document.createElement('ul');
const toDoTitle = document.createElement('li');
toDoTitle.innerHTML = "Today's To Do";
toDoTitle.classList.add('task');
toDoListUl.appendChild(toDoTitle);

const toDoAdd = document.createElement('input');
toDoAdd.type = 'text';
toDoAdd.classList.add('task');
toDoAdd.id = 'to-do-add';
toDoAdd.placeholder = 'Add to your list...';
toDoAdd.innerHTML = 'Add to your list...';

toDoListUl.appendChild(toDoAdd);

const toDoClear = document.createElement('li');
toDoClear.innerHTML = 'Clear all completed';
toDoClear.classList.add('task');
toDoClear.id = 'to-do-clear';

const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
let myIndex;
let completed = false;

class ToDoListTasks {
  addTask = (description) => {
    myIndex = toDoList.length;
    toDoList.push({
      description,
      myIndex,
      completed,
    });

    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    return {
      description,
      myIndex,
      completed,

    };
  }
  createTask = ({
    description,
  }) => {
    // Create elements
    const toDoTask = document.createElement('li');
    toDoTask.classList.add('task');
    toDoTask.classList.add('the-task');


    const toDoTaskCompleted = document.createElement('input');
    toDoTaskCompleted.type = 'checkbox';
    toDoTaskCompleted.id = myIndex;
    toDoTaskCompleted.classList.add('task-completed');
    const toDoTaskDescription = document.createElement('label');
    toDoTaskDescription.for = myIndex;
    toDoTaskDescription.innerHTML = description;
    toDoTaskDescription.classList.add('task-description');

    toDoTask.appendChild(toDoTaskCompleted);
    toDoTask.appendChild(toDoTaskDescription);

    const taskRemove = document.createElement('button');
    taskRemove.classList.add('task-remove');
    taskRemove.innerText = 'Remove';



    taskRemove.onclick = function() {
      taskRemove.parentElement.remove();
      let myIndex;
      for (let i = 0; i < toDoList.length; i += 1) {
        if (toDoList[i].innerHTML === description) {
          myIndex = i;
        }
      }
      toDoList.splice(myIndex, 1);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    };

    // toDoClear.onclick = function() {
    //   let newIndex;
    //   for (let i = 0; i < toDoList.length; i += 1) {
    //     if (toDoTaskCompleted.checked) {
    //       console.log("dsds");
    //       newIndex = i;
    //       toDoList.splice(newIndex, 1);
    //       toDoTask.remove();
    //       localStorage.setItem('toDoList', JSON.stringify(toDoList));
    //     }
    //   }
    // };

    toDoTask.appendChild(taskRemove);

    toDoListUl.appendChild(toDoTask);

  }
}

const myTasks = new ToDoListTasks();

toDoList.forEach(myTasks.createTask);




toDoAdd.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const newTask = myTasks.addTask(toDoAdd.value);

    myTasks.createTask(newTask);

    toDoAdd.value = '';
  }
});




toDoLlistDiv.appendChild(toDoListUl);



toDoLlistDiv.appendChild(toDoClear);

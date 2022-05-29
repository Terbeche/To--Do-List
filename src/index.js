// import _ from 'lodash';
import './style.css';

const toDoList = [{
  description: 'Complete project',
  completed: 'false',
  index: 0,
},
{
  description: 'Read from books',
  completed: 'false',
  index: 1,
},
{
  description: 'Do some sport',
  completed: 'false',
  index: 2,
},
];

const toDoLlistDiv = document.querySelector('.to-do-list');
const toDoListUl = document.createElement('ul');

const toDoTitle = document.createElement('li');
toDoTitle.innerHTML = "Today's To Do";
toDoTitle.classList.add('task');
toDoListUl.appendChild(toDoTitle);

const toDoAdd = document.createElement('li');
toDoAdd.innerHTML = 'Add to your list...';
toDoAdd.classList.add('task');
toDoAdd.id = 'to-do-add';
toDoAdd.placeholder = 'Add to your list';

toDoListUl.appendChild(toDoAdd);

for (let i = 0; i < toDoList.length; i += 1) {
  const toDoTask = document.createElement('li');
  toDoTask.classList.add('task');

  const toDoTaskCompleted = document.createElement('input');
  toDoTaskCompleted.type = 'checkbox';
  toDoTaskCompleted.id = toDoList[i].index;
  toDoTaskCompleted.classList.add('task-completed');

  const toDoTaskDescription = document.createElement('label');
  toDoTaskDescription.for = toDoList[i].index;
  toDoTaskDescription.innerHTML = toDoList[i].description;
  toDoTaskDescription.classList.add('task-description');

  toDoTask.appendChild(toDoTaskCompleted);
  toDoTask.appendChild(toDoTaskDescription);

  toDoListUl.appendChild(toDoTask);
}

const toDoClear = document.createElement('li');
toDoClear.innerHTML = 'Clear all completed';
toDoClear.classList.add('task');
toDoClear.id = 'to-do-clear';

toDoListUl.appendChild(toDoClear);

toDoLlistDiv.appendChild(toDoListUl);

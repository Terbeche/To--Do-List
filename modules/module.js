export * from './module.js';
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

let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
let myIndex;
const completed = false;
class ToDoListTasks {
  addTask = (description) => {
    myIndex = toDoList.length + 1;
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

    const taskEdit = document.createElement('button');
    taskEdit.classList.add('task-edit');
    taskEdit.innerText = 'Edit';

    toDoTaskCompleted.addEventListener('change', (event) => {
      if (toDoTaskCompleted.checked) {
        for (let i = 0; i < toDoList.length; i += 1) {
          if (toDoList[i].description === description) {
            toDoList[i].completed = true;
          }
        }
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
      } else if (toDoTaskCompleted.checked === false) {
        for (let i = 0; i < toDoList.length; i += 1) {
          if (toDoList[i].description === description) {
            toDoList[i].completed = false;
          }
        }
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
      }
    });

    toDoClear.addEventListener('click', (event) => {
      for (let i = 0; i < toDoList.length; i += 1) {
        if (toDoList[i].completed === true) {
          toDoList[i].remove();
        }
      }
      toDoList = toDoList.filter((oneTask) => oneTask.completed === false);

      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    });

    taskRemove.onclick = function() {
      taskRemove.parentElement.remove();
      let theIndex;
      for (let i = 0; i < toDoList.length; i += 1) {
        if (toDoList[i].description === description) {
          theIndex = i;
        }
      }
      toDoList.splice(theIndex, 1);

      for (let j = 0; j < toDoList.length; j += 1) {
        toDoList[j].myIndex = j + 1;
      }
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    };

    taskEdit.onclick = function() {
      const editField = document.createElement('input');
      editField.type = 'text';
      editField.classList.add = 'edit-input';
      editField.value = toDoTaskDescription.innerHTML;
      toDoTask.appendChild(editField);
      editField.focus();
      toDoTaskDescription.style.display = 'none';

      editField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          toDoList[0].description = editField.value;
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
          toDoTaskDescription.innerHTML = `${editField.value}`;
          editField.style.display = 'none';
          toDoTaskDescription.style.display = 'flex';
        }
      });
    };

    toDoTask.appendChild(taskRemove);
    toDoTask.appendChild(taskEdit);

    toDoListUl.appendChild(toDoTask);
  }
}

const myTasks = new ToDoListTasks();
toDoList.forEach(myTasks.createTask);

toDoAdd.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const newTask = myTasks.addTask(toDoAdd.value);

    myTasks.createTask(newTask);

    toDoAdd.value = '';
  }
});

toDoLlistDiv.appendChild(toDoListUl);

toDoLlistDiv.appendChild(toDoClear);

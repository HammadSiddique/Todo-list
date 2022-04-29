import './style.css';

const tasks = [
  {
    description: 'Complete todo list structure',
    completed: false,
    index: 0,
  },
  {
    description: 'Create a professional github page draft',
    completed: false,
    index: 1,
  },
  {
    description: 'Submit quiz',
    completed: false,
    index: 2,
  },
];

const todoList = document.querySelector('.todo-list');

for (let i = 0; i < tasks.length; i += 1) {
  todoList.innerHTML += `
                            <li class= "todo-item">
                                <div class="items">
                                    <input type="checkbox" name="checkbox-${
  tasks[i].index
}" ${
  tasks[i].completed ? 'checked' : 'unchecked'
}>
                                    <p>${tasks[i].description}</p>
                                </div>
                                <button class ="item-menu" type="menu"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                            </li> 
    `;
}

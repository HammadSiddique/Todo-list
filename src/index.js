import './style.css';
import Tasks from './modules/tasks.js';
import Status from './modules/taskStatus.js';

const tasks = new Tasks();
const status = new Status();

tasks.renderList();

const newTask = document.querySelector('.new-task');
newTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && newTask.value) {
    tasks.add(newTask.value);
    newTask.value = '';
  }
});

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  document.location.reload();
});

status.clearCompleted(tasks);

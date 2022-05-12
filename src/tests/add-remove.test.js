/**
 * @jest-environment jsdom
 *
 */
import Tasks from '../modules/tasks.js';

document.body.innerHTML = `<section class="d-flex cols todo-list">
  <header class="header d-flex s-between">
      <h2>Today's To Do </h2>
      <span class="material-icons" id="refresh-all">autorenew</span>
      <hr>
  </header>
  <form action="#" class="d-flex s-between" id="add-task">
      <input type="text" name="activity" placeholder="Add your List" id="add-new-task">
      <button type="submit">
          <span class="material-icons">keyboard_return</span>
      </button>
  </form>
  <ul id="list-items"></ul>
  <div class="d-flex clear-completed">
    Clear All Completed
  </div>
 </section>`;

describe('Testing Add function', () => {
  window.localStorage = Storage.prototype;
  test('Test: Add task', () => {
    const todoList = new Tasks();
    todoList.add('Test');
    todoList.add('Test 2');
    todoList.add('test item 3');
    expect(todoList.tasksArray).toHaveLength(3);
  });
  // create remove test here
  test('Test: Delete task', () => {
    const todoList = new Tasks();
    todoList.remove(1);
    expect(todoList.tasksArray).toHaveLength(2);
  });
});
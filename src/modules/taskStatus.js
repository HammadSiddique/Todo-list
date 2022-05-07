export default class Status {
  completeTask = (array) => {
    const todoTask = document.querySelectorAll(".todo-task");
    const checkboxes = document.querySelectorAll(".check-task");
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("click", () => {
        todoTask[index].classList.toggle("active");
        array[index].isCompleted = !array[index].isCompleted;
        localStorage.setItem("tasks", JSON.stringify(array));
      });
    });
  };

  clearCompleted = (tasks) => {
    const clearBtn = document.querySelector("#clear-items");
    clearBtn.addEventListener("click", () => {
      tasks.tasksArray = tasks.tasksArray.filter(
        (item) => item.isCompleted === false
      );
      localStorage.setItem("tasks", JSON.stringify(tasks.tasksArray));
      tasks.renderList();
    });
  };
}

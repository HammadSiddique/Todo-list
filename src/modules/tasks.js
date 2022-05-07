import Status from "./taskStatus.js";

const status = new Status();

export default class Tasks {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  renderList = () => {
    const listContainer = document.querySelector(".todo-list");
    listContainer.innerHTML = "";
    this.tasksArray.forEach((task) => {
      const li = document.createElement("li");
      li.className = "todo-task";
      li.id = task.index;
      li.innerHTML = `<div>
            <button class="check-task"><i class="fa-regular fa-square"></i> <i class="fa-solid fa-check"></i></button> 
            <input class="todo-input" type="text" value="${task.description}">
            </div>
            <button class="delete-task"><i class="fa-solid fa-trash-can"></i></button>`;
      listContainer.insertBefore(li, listContainer.children[task.index]);
      if (task.isCompleted) {
        li.classList.add("active");
      }
    });
    const deleteBtn = document.querySelectorAll(".delete-task");
    deleteBtn.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.remove(index);
      });
    });

    const editTask = document.querySelectorAll(".todo-input");
    editTask.forEach((input, index) => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && input.value) {
          this.update(input.value, index);
        }
      });
      input.addEventListener("change", () => {
        if (input.value) {
          this.update(input.value, index);
        }
      });
    });

    status.completeTask(this.tasksArray);
  };

  add = (value) => {
    this.tasksArray.push({
      description: value,
      isCompleted: false,
      index: this.tasksArray.length,
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasksArray));
    this.renderList();
  };

  update = (value, index) => {
    this.tasksArray[index].description = value;
    localStorage.setItem("tasks", JSON.stringify(this.tasksArray));
    this.renderList();
  };

  remove = (index) => {
    this.tasksArray.splice(index, 1);
    for (let i = 0; i < this.tasksArray.length; i += 1) {
      this.tasksArray[i].index = i;
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasksArray));
    this.renderList();
  };
}

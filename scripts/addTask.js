addTaskForm = document.getElementById("addTaskForm");

addTaskForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let taskName = document.querySelector("#taskName").value;
  let taskDesc = document.querySelector("#taskDesc").value;

  task = new Task(taskName, taskDesc);
  saveTaskInStorage(task);
});

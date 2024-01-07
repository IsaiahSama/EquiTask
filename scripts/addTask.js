addTaskForm = document.getElementById("addTaskForm");

addTaskForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let taskName = document.querySelector("#name").value;
  let taskDesc = document.querySelector("#desc").value;

  task = new Task(taskName, taskDesc);
  console.log(task);
});

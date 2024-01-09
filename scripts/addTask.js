addTaskForm = document.getElementById("addTaskForm");

addTaskForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let taskName = document.querySelector("#taskName").value;
  let taskDesc = document.querySelector("#taskDesc").value;

  document.querySelector("#taskName").value = "";
  document.querySelector("#taskDesc").value = "";

  let infoBox = document.querySelector("#taskInfoBox");
  infoBox.innerHTML = "Success!";
  show(infoBox);

  task = new Task(taskName, taskDesc, null);
  saveTaskInStorage(task);
  setTimeout(() => {
    infoBox.innerHTML = "";
    hide(infoBox);
  }, 3000);
});

let form = document.getElementById("distForm");
let ids = [];

function loadSelectableTasks() {
  const cont = document.getElementById("taskContainer");
  const allTasks = getAllItemsFromStorage();

  let elements = [];
  for (let key of Object.keys(allTasks)) {
    let t = new Task(key, allTasks[key], null);
    elements.push(t.getCheckboxHTML());
    ids.push(key);
  }

  if (elements.length == 0) {
    cont.innerHTML =
      "You have no tasks! Press the 'Add Task' button to add them!";
    return;
  }

  for (let element of elements) {
    cont.appendChild(element);
  }
}

function loadSelectableDays() {
  const cont = document.getElementById("dayContainer");

  for (let day of [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]) {
    cont.appendChild(createCheckboxElement(day));
  }
}

loadSelectableTasks();
loadSelectableDays();

function getChecked(ids) {
  const elements = [];
  for (let id of ids) {
    let element = document.getElementById(id);
    if (element && element.checked) elements.push(element);
  }
  return elements;
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let tasks = getChecked(ids);
});

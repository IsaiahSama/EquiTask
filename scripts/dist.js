let form = document.getElementById("distForm");
let ids = [];
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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

  for (let day of days) {
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

function handleDistribution(tasks, days) {
  // Get the days objects
  // Shuffle the tasks
  // Iterate through the tasks, adding them to the days one by one in a cycle
  // Save the updated days objects
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let selectedTasks = getChecked(ids);
  let selectedDays = getChecked(days);
});

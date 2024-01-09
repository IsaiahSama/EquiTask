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
  let dayObjects = [];
  for (let day of days) {
    let dayEntry = getDayFromStorage(day);
    if (Object.keys(dayEntry) == 0) {
      dayObjects.push(new Day(day, []));
    } else {
      dayObjects.push(new Day(day, dayEntry[day]));
    }
  }
  // Shuffle the tasks
  tasks = shuffleArray(tasks);

  // Iterate through the tasks, adding them to the days one by one in a cycle
  let dayIndex = 0;
  console.log(tasks);
  for (let task of tasks) {
    console.log(dayObjects, dayObjects[dayIndex]);
    dayObjects[dayIndex].addTask(task.name);
    dayIndex += 1;
    if (dayIndex >= dayObjects.length) dayIndex = 0;
  }

  // Save the updated days objects

  for (let day of dayObjects) saveDayInStorage(day);
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let selectedTasks = getChecked(ids);
  let selectedDays = getChecked(days);

  handleDistribution(selectedTasks, selectedDays);
});

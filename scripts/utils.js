let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const saveTaskInStorage = (task) => {
  let allTasks = getAllItemsFromStorage();
  allTasks[task.name] = task.desc;
  localStorage.setItem("tasks", JSON.stringify(allTasks));
};

const getTaskFromStorage = (taskName) => {
  let allTasks = getAllItemsFromStorage();
  return allTasks[taskName] || {};
};

const deleteTaskFromStorage = (taskName) => {
  let allTasks = getAllItemsFromStorage();
  delete allTasks[taskName];
  localStorage.setItem("tasks", JSON.stringify(allTasks));
};

const getAllItemsFromStorage = () => {
  return getAllFromStorage("tasks");
};

const saveDayInStorage = (day) => {
  let allDays = getAllDaysFromStorage();
  allDays[day.name] = [];
  for (let task of day.tasks) {
    allDays[day.name].push(task);
  }
  console.log(allDays, allDays[day.name]);
  localStorage.setItem("days", JSON.stringify(allDays));
};

const getDayFromStorage = (dayName) => {
  let allDays = getAllDaysFromStorage();
  return allDays[dayName] || {};
};

const getAllDaysFromStorage = () => {
  return getAllFromStorage("days");
};

const getAllFromStorage = (key) => {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    if (parsedData && Object.keys(parsedData).length > 0) {
      return parsedData;
    }
  }

  return {};
};

const createCheckboxElement = (labelValue, desc) => {
  /*  <div class="check-container">
            <label for="task1" class="checkbox">
                <input type="checkbox" name="task1" id="task1" />
                Some Tuesday Task
            </label>
        </div>; 
    */
  // Creating container
  const container = document.createElement("div");
  container.className = "check-container";

  // Creating the label
  const label = document.createElement("label");
  label.setAttribute("for", labelValue);
  label.className = "checkbox";
  label.title = desc;

  // Creating the input box
  const inp = document.createElement("input");
  inp.setAttribute("type", "checkbox");
  inp.setAttribute("name", labelValue);
  inp.setAttribute("id", labelValue);

  // Putting it all together
  label.appendChild(inp);
  label.appendChild(document.createTextNode(" " + labelValue + " "));
  container.appendChild(label);

  return container;
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const hide = (element) => {
  element.classList.add("hidden");
};

const show = (element) => {
  element.classList.remove("hidden");
};

const saveTaskInStorage = (task) => {
  let allTasks = getAllItemsFromStorage();
  allTasks[task.name] = task.desc;
  localStorage.setItem("tasks", JSON.stringify(allTasks));
};

const getTaskFromStorage = (taskName) => {
  let allTasks = getAllItemsFromStorage();
  return allTasks[taskName] || {};
};

const getAllItemsFromStorage = () => {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    const parsedTasks = JSON.parse(storedTasks);
    if (parsedTasks && Object.keys(parsedTasks).length > 0) {
      return parsedTasks;
    }
  }

  return {};
};

const createCheckboxElement = (labelValue) => {
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

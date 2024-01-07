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

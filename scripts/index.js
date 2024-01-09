const renderTable = () => {
  let allDays = getAllDaysFromStorage();
  let longest = 0;
  for (let day of Object.keys(allDays)) {
    if (allDays[day].length > longest) longest = allDays[day].length;
  }

  let row = 0;
  while (row < longest) {
    tasks_to_render = [];

    for (let day of days) {
      if (day in allDays && allDays[day].length > 0) {
        let task_name = allDays[day].pop();
        let task_data = getTaskFromStorage(task_name);
        let task = new Task(task_name, task_data[task_name], day);
        tasks_to_render.push(task.getTableHTML());
      }
    }
    row += 1;
  }
};

renderTable();

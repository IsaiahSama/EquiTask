function renderTable() {
  let allDays = getAllDaysFromStorage();
  let longest = 0;
  for (let day of Object.keys(allDays)) {
    if (allDays[day].length > longest) longest = allDays[day].length;
  }

  let row = 0;
  let tbody = document.getElementById("tableBody");
  while (row < longest) {
    let tr = document.createElement("tr");

    for (let day of days) {
      if (day in allDays && allDays[day].length > 0) {
        let task_name = allDays[day].pop();
        let task_data = getTaskFromStorage(task_name);
        let task = new Task(task_name, task_data, day);
        tr.appendChild(task.getTableHTML());
      } else {
        tr.appendChild(document.createElement("td"));
      }
    }
    tbody.appendChild(tr);
    row += 1;
  }
}

setTimeout(renderTable, 1000);

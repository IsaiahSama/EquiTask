function renderTable() {
  let allDays = getAllDaysFromStorage();
  let longest = 0;
  for (let day of Object.keys(allDays)) {
    if (allDays[day].length > longest) longest = allDays[day].length;
  }
  let tbody = document.getElementById("tableBody");
  if (longest == 0) {
    tbody.innerHTML =
      "<tr>No tasks to show! Press the Spread Task button to distribute some!</tr>";
    return;
  }
  let row = 0;
  while (row < longest) {
    let tr = document.createElement("tr");

    for (let day of days) {
      if (day in allDays && allDays[day].length > 0) {
        let task_name = allDays[day].pop();
        let task_data = getTaskFromStorage(task_name);
        let task = new Task(task_name, task_data, new Day(day, []));
        tr.appendChild(task.getTableHTML());
      } else {
        tr.appendChild(document.createElement("td"));
      }
    }

    setTimeout(() => tbody.appendChild(tr), 500 * row);
    row += 1;
  }
}

setTimeout(renderTable, 1000);

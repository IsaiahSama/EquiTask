class Task {
  constructor(name, desc, day) {
    this.name = name;
    this.desc = desc;
    this.day = day;
    this.completed = false;
  }

  toggleStatus = function () {
    this.completed = !this.completed;
  };

  deleteTask = function (name) {
    let resp = prompt(
      `Do you want to delete ${name}?\nDescription: ${this.desc}\n Leave blank if no. Put something in the box below if yes!`
    );
    if (resp.length == 0) {
      return false;
    }
    if (this.day) {
      this.day.deleteTask(this.name);
    }
    deleteTaskFromStorage(this.name);
  };

  updateTask = function (name, desc, day) {
    this.name = name == null ? this.name : name;
    this.desc = desc == null ? this.desc : desc;
    this.day = day == null ? this.day : day;
  };

  getCheckboxHTML = function () {
    // Will return some HTML for rendering

    return createCheckboxElement(this.name, this.desc);
  };

  getTableHTML = function () {
    let td = document.createElement("td");
    td.innerHTML = this.name;
    td.title = this.desc;
    td.onclick = () => this.deleteTask(this.name);
    return td;
  };
}

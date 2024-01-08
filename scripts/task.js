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

  deleteTask = function () {
    if (this.day) {
      this.day.deleteTask(this.name);
    }
    delete this;
  };

  updateTask = function (name, desc, day) {
    this.name = name == null ? this.name : name;
    this.desc = desc == null ? this.desc : desc;
    this.day = day == null ? this.day : day;
  };

  getCheckboxHTML = function () {
    // Will return some HTML for rendering

    return createCheckboxElement(this.name);
  };
}

class Task {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.day = null;
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

  updateTask = function (name, desc) {
    this.name = name == null ? this.name : name;
    this.desc = desc == null ? this.desc : desc;
  };

  getAsHTML = function () {
    // Will return some HTML for rendering
  };
}

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
    this.day.deleteTask(this.name);
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

class Day {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }

  addTask = function (task) {
    this.tasks.append(task);
  };

  deleteTask = function (task) {
    this.tasks = this.tasks.filter((t) => t.name != task.name);
  };

  getAsHTML = function () {
    // Return some rendering HTML
  };
}

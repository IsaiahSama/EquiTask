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
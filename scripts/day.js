class Day {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }

  addTask = function (task) {
    this.tasks.push(task);
  };

  deleteTask = function (task) {
    this.tasks = this.tasks.filter((t) => t != task);
  };

  getAsHTML = function () {
    // Return some rendering HTML
  };
}

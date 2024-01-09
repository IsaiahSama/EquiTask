class Day {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }

  addTask = function (task) {
    this.tasks.push(task);
  };

  deleteTask = function (task) {
    let tasks = getDayFromStorage(this.name);
    this.tasks = tasks.filter((t) => t != task);
    saveDayInStorage(this);
  };

  getAsHTML = function () {
    // Return some rendering HTML
  };
}

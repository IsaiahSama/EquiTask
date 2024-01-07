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

  getAsFormHTML = function () {
    // Will return some HTML for rendering
    /*  <div class="check-container">
            <label for="task1" class="checkbox">
                <input type="checkbox" name="task1" id="task1" />
                Some Tuesday Task
            </label>
        </div>; 
    */

    // Creating the container
    const container = document.createElement("div");
    container.className = "check-container";

    // Creating the label
    const label = document.createElement("label");
    label.setAttribute("for", this.name);
    label.className = "checkbox";

    // Creating the input box
    const inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    inp.setAttribute("name", this.name);
    inp.setAttribute("id", this.name);

    // Putting it all together
    label.appendChild(inp);
    label.appendChild(document.createTextNode(" " + this.name + " "));
    container.appendChild(label);

    return container;
  };
}

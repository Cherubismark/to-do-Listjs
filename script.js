
let tasks = [
  {
    id: 0,
    title: 'JS Project',
    description: 'Complete simple to-do list'
  },
  {
    id: 1,
    title: 'Buy groceries',
    description: 'Milk, Bread, Fruits'
  }
];

document.getElementById("taskForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();

  if (!title || !desc) {
    alert("Both title and description are required!");
    return;
  }

  const newTask = {
    id: tasks.length,
    title: title,
    description: desc
  };

  tasks.push(newTask);
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";

  displayTasks();
});

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}

function displayTasks() {
  const container = document.getElementById("taskList");
  container.innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "task-card";

    const header = document.createElement("div");
    header.className = "task-header";

    const title = document.createElement("h3");
    title.textContent = task.title;

    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    // You can implement edit later
    // editBtn.addEventListener("click", () => ...);

    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    header.appendChild(title);
    header.appendChild(buttons);

    const desc = document.createElement("p");
    desc.className = "task-desc";
    desc.textContent = task.description;

    card.appendChild(header);
    card.appendChild(desc);

    container.appendChild(card);
  });
}

displayTasks();

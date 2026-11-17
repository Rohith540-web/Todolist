# Ex03 To-Do List using JavaScript
## Date:17-11-2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
# index.html
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskFlow - Todo Manager</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">

    <!-- Sidebar -->
    <aside class="sidebar">
        <h2>✦ TaskFlow</h2>
        <p class="side-label">MENU</p>

        <button class="nav active" data-filter="all">
            ◫ Dashboard
        </button>

        <button class="nav" data-filter="pending">
            ◷ My Tasks
        </button>

        <button class="nav" data-filter="completed">
            ✓ Completed
        </button>

        <div class="side-bottom">
            <button id="themeBtn">🌙 Dark Mode</button>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main">

        <header>
            <div>
                <p class="welcome">WELCOME BACK!</p>
                <h1>My Dashboard</h1>
                <p class="subtitle">
                    Manage your tasks and achieve your goals.
                </p>
            </div>
            <span class="profile">RV</span>
        </header>

        <!-- Statistics -->
        <section class="stats">

            <div class="stat-card">
                <span>📋 Total Tasks</span>
                <h2 id="totalTasks">0</h2>
                <p>All your tasks</p>
            </div>

            <div class="stat-card">
                <span>⏳ Pending</span>
                <h2 id="pendingTasks">0</h2>
                <p>Tasks to complete</p>
            </div>

            <div class="stat-card">
                <span>✅ Completed</span>
                <h2 id="completedTasks">0</h2>
                <p>Tasks finished</p>
            </div>

            <div class="stat-card">
                <span>📈 Progress</span>
                <h2 id="progress">0%</h2>
                <p>Overall achievement</p>
            </div>

        </section>

        <!-- Progress -->
        <section class="progress-card">
            <div class="progress-heading">
                <h3>Today's Productivity</h3>
                <span id="progressText">0% completed</span>
            </div>

            <div class="progress-track">
                <div id="progressBar"></div>
            </div>
        </section>

        <!-- Add Task -->
        <section class="task-panel">

            <h2>Create New Task</h2>

            <form id="taskForm">

                <input
                    type="text"
                    id="taskInput"
                    placeholder="Enter your task..."
                    required
                >

                <select id="category">
                    <option value="Personal">Personal</option>
                    <option value="College">College</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>

                <select id="priority">
                    <option value="Low">Low Priority</option>
                    <option value="Medium" selected>Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>

                <input type="date" id="dueDate">

                <button type="submit" class="add-btn">
                    + Add Task
                </button>

            </form>

        </section>

        <!-- Task List -->
        <section class="task-panel">

            <div class="task-heading">
                <div>
                    <h2>My Tasks</h2>
                    <p class="subtitle">Track and organize your activities.</p>
                </div>

                <button id="clearBtn" class="clear-btn">
                    Clear Completed
                </button>
            </div>

            <div class="tools">
                <input
                    type="search"
                    id="searchInput"
                    placeholder="🔍 Search tasks..."
                >

                <select id="categoryFilter">
                    <option value="all">All Categories</option>
                    <option value="Personal">Personal</option>
                    <option value="College">College</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div class="filter-buttons">
                <button class="filter active" data-filter="all">
                    All Tasks
                </button>

                <button class="filter" data-filter="pending">
                    Pending
                </button>

                <button class="filter" data-filter="completed">
                    Completed
                </button>
            </div>

            <div id="taskList"></div>

            <p id="emptyMessage" class="empty">
                No tasks found. Add a new task!
            </p>

        </section>

        <footer>
            Designed by Rohith V |
            Register Number: 212224220083
        </footer>

    </main>
</div>

<script src="script.js"></script>
</body>
</html>

```
# style.css
```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f3f5fb;
    color: #202b45;
    transition: 0.3s;
}

.app {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */

.sidebar {
    width: 245px;
    background: #17243e;
    color: white;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.sidebar h2 {
    font-size: 25px;
    margin-bottom: 45px;
}

.side-label {
    color: #8997b2;
    font-size: 12px;
    margin-bottom: 15px;
}

.nav, #themeBtn {
    width: 100%;
    padding: 14px;
    margin-bottom: 10px;
    border: none;
    background: transparent;
    color: #c5cfe1;
    text-align: left;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
}

.nav:hover, .nav.active {
    background: #344b75;
    color: white;
}

.side-bottom {
    margin-top: auto;
}

/* Main */

.main {
    flex: 1;
    padding: 35px;
    max-width: 1450px;
    margin: auto;
    width: 100%;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.welcome {
    color: #5478df;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
}

h1 {
    font-size: 30px;
    margin: 7px 0;
}

.subtitle {
    color: #8b94a7;
    font-size: 14px;
}

.profile {
    background: #4169e1;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: bold;
}

/* Statistics */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 22px;
}

.stat-card {
    background: white;
    padding: 23px;
    border-radius: 13px;
    box-shadow: 0 3px 12px #18294a0c;
    border: 1px solid #edf0f6;
}

.stat-card span {
    color: #7c879d;
    font-size: 14px;
}

.stat-card h2 {
    font-size: 30px;
    margin: 13px 0 5px;
    color: #315bd0;
}

.stat-card p {
    color: #9ba4b5;
    font-size: 12px;
}

/* Progress */

.progress-card, .task-panel {
    background: white;
    padding: 25px;
    border-radius: 13px;
    margin-bottom: 22px;
    box-shadow: 0 3px 12px #18294a0c;
    border: 1px solid #edf0f6;
}

.progress-heading, .task-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-bottom: 18px;
}

.progress-heading h3 {
    font-size: 16px;
}

.progress-heading span {
    color: #4169e1;
    font-size: 13px;
}

.progress-track {
    height: 10px;
    background: #e9edf5;
    border-radius: 20px;
    overflow: hidden;
}

#progressBar {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #4169e1, #55c5ad);
    border-radius: 20px;
    transition: 0.4s;
}

/* Form */

.task-panel h2 {
    margin-bottom: 20px;
    font-size: 20px;
}

form {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr auto;
    gap: 10px;
}

input, select {
    padding: 12px;
    border: 1px solid #dce1eb;
    border-radius: 7px;
    outline: none;
    background: white;
    color: #27344d;
    min-width: 0;
}

input:focus, select:focus {
    border-color: #4169e1;
}

button {
    cursor: pointer;
}

.add-btn {
    background: #4169e1;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 7px;
    font-weight: bold;
}

.add-btn:hover {
    background: #284bb5;
}

/* Task Tools */

.task-heading h2 {
    margin-bottom: 5px;
}

.clear-btn {
    border: none;
    background: #fff0f0;
    color: #e34b4b;
    padding: 11px 15px;
    border-radius: 7px;
}

.tools {
    display: flex;
    gap: 12px;
    margin-bottom: 18px;
}

.tools input {
    flex: 1;
}

.filter-buttons {
    display: flex;
    gap: 9px;
    margin-bottom: 18px;
}

.filter {
    border: none;
    background: #edf1fa;
    color: #53617d;
    padding: 10px 17px;
    border-radius: 7px;
}

.filter.active {
    background: #4169e1;
    color: white;
}

/* Task Cards */

.task-card {
    display: flex;
    align-items: center;
    gap: 13px;
    background: #f7f8fc;
    border: 1px solid #edf0f6;
    padding: 16px;
    border-radius: 9px;
    margin-bottom: 11px;
}

.task-card input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #4169e1;
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-info h3 {
    font-size: 15px;
    overflow-wrap: anywhere;
}

.task-info p {
    color: #8c96aa;
    font-size: 12px;
    margin-top: 7px;
}

.task-info h3.done {
    text-decoration: line-through;
    color: #9ca3af;
}

.tag {
    font-size: 11px;
    padding: 5px 9px;
    border-radius: 20px;
    white-space: nowrap;
}

.High {
    background: #ffe5e5;
    color: #d93636;
}

.Medium {
    background: #fff0d9;
    color: #c37a12;
}

.Low {
    background: #ddf7e9;
    color: #21844e;
}

.actions {
    display: flex;
    gap: 6px;
}

.actions button {
    padding: 7px 10px;
    border: none;
    border-radius: 6px;
}

.edit-btn {
    background: #e6edff;
    color: #4169e1;
}

.delete-btn {
    background: #ffe7e7;
    color: #e33b3b;
}

.empty {
    display: none;
    text-align: center;
    padding: 30px;
    color: #9ba4b5;
}

footer {
    text-align: center;
    padding: 25px 10px;
    color: #8c96aa;
    font-size: 13px;
}

/* Dark Mode */

body.dark {
    background: #111827;
    color: #f1f5f9;
}

body.dark .stat-card,
body.dark .progress-card,
body.dark .task-panel {
    background: #1f2937;
    border-color: #374151;
}

body.dark .task-card {
    background: #283548;
    border-color: #374151;
}

body.dark input,
body.dark select {
    background: #283548;
    color: white;
    border-color: #46546a;
}

body.dark .filter {
    background: #374151;
    color: white;
}

body.dark .filter.active {
    background: #4169e1;
}

body.dark .stat-card h2 {
    color: #8ca9ff;
}

body.dark .task-info h3 {
    color: #f1f5f9;
}

body.dark .task-info h3.done {
    color: #9ca3af;
}

body.dark .progress-track {
    background: #374151;
}

/* Responsive Design */

@media (max-width: 1050px) {
    form {
        grid-template-columns: 1fr 1fr;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {
    .app {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        padding: 15px;
    }

    .sidebar h2 {
        margin-bottom: 15px;
    }

    .side-label {
        display: none;
    }

    .nav {
        display: inline-block;
        width: auto;
        padding: 9px;
        font-size: 12px;
    }

    .side-bottom {
        margin-top: 5px;
    }

    #themeBtn {
        margin-bottom: 0;
    }

    .main {
        padding: 18px;
    }

    h1 {
        font-size: 24px;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .stat-card {
        padding: 15px;
    }

    .task-card {
        flex-wrap: wrap;
    }

    .actions {
        margin-left: auto;
    }

    form {
        grid-template-columns: 1fr;
    }

    .tools {
        flex-direction: column;
    }

    .task-heading {
        align-items: flex-start;
    }

    .filter-buttons {
        flex-wrap: wrap;
    }
}

@media (max-width: 400px) {
    .stats {
        grid-template-columns: 1fr;
    }
}

```
# script.js
```

// Get HTML elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const category = document.getElementById("category");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
let currentFilter = "all";

// Save tasks in Local Storage
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Add new task
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = taskInput.value.trim();

    if (name === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        name: name,
        category: category.value,
        priority: priority.value,
        dueDate: dueDate.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    taskForm.reset();

    priority.value = "Medium";
    displayTasks();
});

// Display tasks
function displayTasks() {

    taskList.innerHTML = "";

    let search = searchInput.value.toLowerCase();
    let selectedCategory = categoryFilter.value;

    let filteredTasks = tasks.filter(function(task) {

        let matchSearch = task.name.toLowerCase()
            .includes(search);

        let matchCategory =
            selectedCategory === "all" ||
            task.category === selectedCategory;

        let matchStatus =
            currentFilter === "all" ||
            (currentFilter === "pending" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        return matchSearch && matchCategory && matchStatus;
    });

    filteredTasks.forEach(function(task) {

        let card = document.createElement("div");
        card.className = "task-card";

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });

        // Task information
        let info = document.createElement("div");
        info.className = "task-info";

        let title = document.createElement("h3");
        title.textContent = task.name;

        if (task.completed) {
            title.classList.add("done");
        }

        let details = document.createElement("p");

        let dateText = task.dueDate
            ? " | Due: " + task.dueDate
            : " | No deadline";

        details.textContent =
            task.category + dateText;

        info.append(title, details);

        // Priority label
        let tag = document.createElement("span");
        tag.className = "tag " + task.priority;
        tag.textContent = task.priority;

        // Edit button
        let editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function() {
            editTask(task.id);
        });

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {
            deleteTask(task.id);
        });

        let actions = document.createElement("div");
        actions.className = "actions";
        actions.append(editBtn, deleteBtn);

        card.append(checkbox, info, tag, actions);

        taskList.appendChild(card);
    });

    // Empty message
    document.getElementById("emptyMessage").style.display =
        filteredTasks.length === 0 ? "block" : "none";

    updateStatistics();
}

// Complete or uncomplete task
function toggleTask(id) {

    tasks = tasks.map(function(task) {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasks();
    displayTasks();
}

// Edit task
function editTask(id) {

    let task = tasks.find(t => t.id === id);

    let newName = prompt("Enter updated task name:", task.name);

    if (newName !== null && newName.trim() !== "") {

        task.name = newName.trim();

        saveTasks();
        displayTasks();
    }
}

// Delete task
function deleteTask(id) {

    if (confirm("Are you sure you want to delete this task?")) {

        tasks = tasks.filter(t => t.id !== id);

        saveTasks();
        displayTasks();
    }
}

// Filter tasks
function setFilter(value) {

    currentFilter = value;

    document.querySelectorAll(".filter, .nav")
        .forEach(function(button) {

            button.classList.toggle(
                "active",
                button.dataset.filter === value
            );
        });

    displayTasks();
}

// Filter button events
document.querySelectorAll(".filter, .nav")
    .forEach(function(button) {

        button.addEventListener("click", function() {
            setFilter(button.dataset.filter);
        });
    });

// Search tasks
searchInput.addEventListener("input", displayTasks);

// Category filter
categoryFilter.addEventListener("change", displayTasks);

// Clear completed tasks
document.getElementById("clearBtn")
    .addEventListener("click", function() {

        if (confirm("Delete all completed tasks?")) {

            tasks = tasks.filter(t => !t.completed);

            saveTasks();
            displayTasks();
        }
    });

// Update dashboard statistics
function updateStatistics() {

    let total = tasks.length;

    let completed = tasks.filter(
        t => t.completed
    ).length;

    let pending = total - completed;

    let percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.getElementById("totalTasks")
        .textContent = total;

    document.getElementById("pendingTasks")
        .textContent = pending;

    document.getElementById("completedTasks")
        .textContent = completed;

    document.getElementById("progress")
        .textContent = percentage + "%";

    document.getElementById("progressText")
        .textContent = percentage + "% completed";

    document.getElementById("progressBar")
        .style.width = percentage + "%";
}

// Dark and light mode
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

function updateThemeButton() {
    themeBtn.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
}

updateThemeButton();

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    let theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("theme", theme);

    updateThemeButton();
});

// Initial display
displayTasks();

```

## OUTPUT

![alt text](<Screenshot 2026-11-17 103312.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.

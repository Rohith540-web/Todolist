
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

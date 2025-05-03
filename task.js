// Function to add a new task to the task list
function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new task list item
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    const taskId = `task${taskList.children.length + 1}`;

    newTask.innerHTML = `
        <input type="checkbox" id="${taskId}">
        <label for="${taskId}">${taskValue}</label>
    `;

    taskList.appendChild(newTask);
    taskInput.value = ''; // Clear the input field after adding
}

// Function to delete completed tasks
function deleteTask() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.querySelectorAll('li');

    tasks.forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            task.remove();
        }
    });
}

// Function to save changes (this is just a placeholder)
function saveChanges() {
    alert('Your changes have been saved!');
}

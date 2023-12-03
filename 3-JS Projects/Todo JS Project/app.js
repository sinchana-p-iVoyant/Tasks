// Get DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new li element
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="danger" onclick="removeTask(this)">Remove</button>
        `;

        // Append the li element to the ul
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

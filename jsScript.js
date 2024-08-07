const inputField = document.getElementById("inputField");
const taskList = document.getElementById("taskList");

function addTask() {
    if (inputField.value === "") {
        alert("Please add some task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${inputField.value} <span class="remove-task" onclick="removeTask(event)">&times;</span>`;
        li.addEventListener('click', toggleCheck);
        taskList.appendChild(li);
        inputField.value = "";
        saveTasks();
    }
}

function removeTask(event) {
    const li = event.target.parentElement;
    taskList.removeChild(li);
    saveTasks();
}

function toggleCheck(event) {
    if (event.target.tagName !== 'SPAN') { 
        event.target.classList.toggle('checked');
        saveTasks();
    }
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function showTasks() {
    taskList.innerHTML = localStorage.getItem("tasks");
    const tasks = taskList.getElementsByTagName('li');
    for (let task of tasks) {
        task.addEventListener('click', toggleCheck);
        task.querySelector('.remove-task').addEventListener('click', removeTask);
    }
}

showTasks();
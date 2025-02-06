const temp = document.querySelector(".subContainer");
const addItem = document.querySelector(".btn");
const showImportant = document.querySelector(".showImportant");
const showUnImportant = document.querySelector(".showNotImportant");
const showAllTasks = document.querySelector(".ShowAllTasks");

let tasks = [];

addItem.addEventListener("click", function displayTasks() {
    const inputBlock = document.querySelector(".inputText").value;
    const selectBlock = document.querySelector(".selectOption").value;

    if (inputBlock.trim() !== "") {
        tasks.push({ description: inputBlock, priority: selectBlock });
        document.querySelector(".inputText").value = "";
    }
});

showImportant.addEventListener("click", function () {
    const newContainer = document.createElement("div");
    for (let task of tasks) {
        if (task.priority === "Important") {
            const taskElement = document.createElement("p");
            taskElement.textContent = task.description;
            taskElement.classList.add("high");
            newContainer.appendChild(taskElement);
        }
    }
    if (newContainer.children.length > 0) {
        temp.appendChild(newContainer);
    }
});

showUnImportant.addEventListener("click", function () {
    const newContainer = document.createElement("div");
    for (let task of tasks) {
        if (task.priority !== "Important") {
            const taskElement = document.createElement("p");
            taskElement.textContent = task.description;
            taskElement.classList.add("low");
            newContainer.appendChild(taskElement);
        }
    }
    if (newContainer.children.length > 0) {
        temp.appendChild(newContainer);
    }
});

showAllTasks.addEventListener("click", function () {
    const newContainer = document.createElement("div");
    for (let task of tasks) {
        if (task.priority === "Important") {
            const taskElement = document.createElement("p");
            taskElement.textContent = task.description;
            taskElement.classList.add("high");
            newContainer.appendChild(taskElement);
        }
    }
    if (newContainer.children.length > 0) {
        temp.appendChild(newContainer);
    }
});

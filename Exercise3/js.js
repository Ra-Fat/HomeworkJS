// Task Manager with Filter Functionality
const btn = document.querySelector(".add");
const imp = document.querySelector(".showIm");
const Unimp = document.querySelector(".showUn");
const showAll = document.querySelector(".showAll");
let stock = [];

btn.addEventListener("click", function () {
    const inputText = document.querySelector(".inputTask").value;
    const selectBox = document.querySelector(".selectOption").value;

    if (inputText === "") {
        alert("You must input something");
        return;
    }

    stock.push({ description: inputText, priority: selectBox });
});

imp.addEventListener("click", function () {
    displayFilteredTasks("Important");
});

Unimp.addEventListener("click", function () {
    displayFilteredTasks("Unimportant");
});

showAll.addEventListener("click", function () {
    displayFilteredTasks("All");
});


function displayFilteredTasks(priority) {
    const container = document.querySelector(".resultBlock");
    container.innerHTML = "";

    let filteredTasks;
    if (priority === "All") {
        filteredTasks = stock;
    } else if (priority === "Important") {
        filteredTasks = stock.filter(task => task.priority === "Important");
    } else {
        filteredTasks = stock.filter(task => task.priority !== "Important");
    }

    filteredTasks.forEach(task => {
        const item = document.createElement("div");
        item.textContent = task.description;
        item.classList.add(task.priority === "Important" ? "high" : "low");
        container.appendChild(item);
    });
}
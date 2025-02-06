const temp = document.querySelector(".subContainer");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function displayTasks() {
    const inputBlock = document.querySelector(".inputText").value;
    const selectBlock = document.querySelector(".selectOption").value;

    const tasks = [
        { description: inputBlock, priority: selectBlock }
    ];

    for (let task of tasks) {
        const taskElement = document.createElement("p");
        taskElement.textContent = task.description;

        if (task.priority === "Important") {
            taskElement.classList.add("high");
        } else {
            taskElement.classList.add("low");
        }
        temp.appendChild(taskElement);
    }
});

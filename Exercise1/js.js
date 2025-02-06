let tasks= 
[   {description: "Task 1", priority:1},
    {description: "Task 2", priority:0},
    {description: "Task 3", priority:1}
];
let temp= document.createElement("div");
temp.className= "container";

function displayTasks(tasks){
    for(let task of tasks){
        if(task.priority==1){
            let high= document.createElement("p");
            high.classList.add("high");
            high.textContent= task.description;
            temp.appendChild(high);
        }else{
            let low= document.createElement("p");
            low.classList.add("low");
            low.textContent= task.description;
            temp.appendChild(low);
        }
    }
    document.body.appendChild(temp);
}
displayTasks(tasks);
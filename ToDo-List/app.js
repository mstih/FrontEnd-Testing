let numOfTasks = 0;
let content = document.getElementById('content');
let addButton = document.getElementById('add-btn');
let warning = document.getElementById('warning');
//support for enter button instead of add button
document.getElementById('task-input').addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        addButton.click();
    };
});

//function which adds a new task from inputed text (if empty => does nothing)
function addToList(){
    let text = document.getElementById('task-input');
    if(text.value != ""){
        warning.style.display = "none";
        let newTask = document.createElement("div");
        newTask.className = 'item';
        newTask.id = "task" + numOfTasks.toString();
        newTask.innerHTML = `<i class="icon-check-empty" onclick="toogleDone('${newTask.id}')"></i>
                                <h4>` +text.value+ `</h4>
                                <i class="icon-remove" onclick="removeFromList('${newTask.id}')"></i>`;
        content.appendChild(newTask);
        numOfTasks++;
        text.value = "";
    }else{
        warning.innerHTML = "You need to enter a task name"
        warning.style.display = "block";
    }   
};

//function which removes selected element from the list
function removeFromList(taskID){
    let taskToRemove = document.getElementById(taskID);
    content.removeChild(taskToRemove);
    console.log("Removed item with id: " + taskID);
}

//function which changes the icon to done
function toogleDone(taskID){
    let oldHtml = document.getElementById(taskID);
    let temp = oldHtml.innerHTML.toString();
    let newHtml = temp.replace("icon-check-empty", "icon-check");
    console.log(newHtml);
    oldHtml.innerHTML = newHtml;
    console.log("Task with id: " + taskID + " now marked as completed!");
}

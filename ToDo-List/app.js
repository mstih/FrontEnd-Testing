let numOfTasks = 0;

//support for enter button instead of add button
document.getElementById('task-input').addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        addButton.click();
    };
});

function addToList(){
    let text = document.getElementById('task-input');
    if(text.value != ""){
        let content = document.getElementById('content');
        let newTask = document.createElement("div");
        newTask.className = 'item';
        newTask.id = "task" + numOfTasks.toString;
        newTask.innerHTML = `<i class="icon-check-empty"></i>
                                <h4>` +text.value+ `</h4>
                                <i class="icon-remove"></i>`;
        content.appendChild(newTask);
        numOfTasks++;
    }   
};


function removeFromList(){
    //for clicking cross and remove item -- later added
}

function toogleDone(){
    //for clicking empty square and changing it to task completed
}

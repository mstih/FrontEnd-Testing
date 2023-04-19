var numOfTasks = 0;
var addButton = document.querySelector('button');
var inputField = document.getElementById('input-task');

//support for enter button instead of add button
inputField.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        addButton.click();
    };
});

function addToList(){
    let content = document.getElementById('content');
    let text = document.getElementById('input-task').value;
    console.log(text);
    //checks if empty --> not added to the list
    if (text !== ""){   
        let newTask = document.createElement("div");
        newTask.className = 'item';
        newTask.id = "task" + numOfTasks.toString;
        newTask.innerHTML = `<i class="icon-check-empty"></i>
                                <h4>` +text+ `</h4>
                                <i class="icon-remove"></i>`;
        content.appendChild(newTask);
        numOfTasks++;
    };
};


function removeFromList(){
    //for clicking cross and remove item -- later added
}

function toogleDone(){
    //for clicking empty square and changing it to task completed
}

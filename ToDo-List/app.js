let numOfTasks = 0;

function addToList(){
    let content = document.getElementById('content');
    let text = document.getElementById('input-task').value;
    console.log(text);
    if (text !== ""){
        let newTask = document.createElement('div');
        newTask.innerHTML = `<i class="icon-check-empty"></i>
                                <h4>` +text+ '</h4>';
        content.appendChild(newTask);
        numOfTasks++;
    }else{
        let placeholder = document.getElementById('input-task');
    };
};


function removeFromList(){

}

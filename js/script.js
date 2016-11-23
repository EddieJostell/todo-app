
function newTask() {

    //Create a new task from what input you give the textfield.
    
    var inputValue = document.getElementById("myInput").value;
    var textWritten = document.createTextNode(inputValue);
 
    var li = document.createElement("li");
    li.style.color = "red";
    li.style.wordWrap = "break-word";
    li.appendChild(textWritten);
    if (inputValue === "") {
        alert("You have to write something!");
    }
    else {

        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(" ");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    deleteButton(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(" ");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    doneButton(li);
    

}



// Create a delete button for a task.
function deleteButton(li) {

    var delBtn = document.createElement("BUTTON");
    var delTxt = document.createTextNode("Delete");
    delBtn.appendChild(delTxt);
    delBtn.id = "btnDelete";
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteTask);

}

// Remove a task with the delete button.
function deleteTask() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

//Create a done button for a created task
function doneButton(li) {
    var doneBtn = document.createElement("BUTTON");
    var doneTxt = document.createTextNode("Done");
    doneBtn.appendChild(doneTxt);
    li.appendChild(doneBtn);
    doneBtn.id = "btnDone";
    doneBtn.addEventListener("click", taskDone);

}
//Send a complete task to the done list.
function taskDone() {
    var newText = this.parentNode.parentNode.children;
    var ulDone = document.getElementById("myDoneUL");
    ulDone.appendChild(this.parentNode);
    this.parentNode.style.textDecoration = "line-through";
    this.parentNode.removeChild(this);
    

    
}

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('btnAdd').click();
        return false;
    }
    return true;
}



document.getElementById("btnAdd").addEventListener("click", newTask);




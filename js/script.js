
function newTask() {

    //Skapar en ny task från vad man skrev i textrutan.
    
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



// SKAPA EN DELETE KNAPP FÖR EN TASK
function deleteButton(li) {

    var delBtn = document.createElement("BUTTON");
    var delTxt = document.createTextNode("Delete");
    delBtn.appendChild(delTxt);
    delBtn.id = "btnDelete";
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteTask);

}

// TA BORT EN TASK MED DELETE KNAPPEN
function deleteTask() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

// SKAPA EN DONE KNAPP FÖR EN TASK
function doneButton(li) {
    var doneBtn = document.createElement("BUTTON");
    var doneTxt = document.createTextNode("Done");
    doneBtn.appendChild(doneTxt);
    li.appendChild(doneBtn);
    doneBtn.id = "btnDone";
    doneBtn.addEventListener("click", taskDone);

}
// SKICKA EN FÄRDIG TASK TILL TASK DONE LISTAN.
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




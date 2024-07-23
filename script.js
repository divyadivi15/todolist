const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");
const deleteAllBtn = document.getElementById("clear button");

function addtask(){
    if(input.value == ""){
        alert("You must write something !!");

    }else{
        let li = document.createElement("li");
        li.innerHTML= input.value.trim();
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveData();
    //whenever new task is added this func call is used to save those data in local storage
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == 'LI' ){
        e.target.classList.toggle("checked");
        saveData();
    //whenever new task is updated this func call is used to save those data in local storage
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    //whenever new task is removed this func call is used to save those data in local storage
    }
}, false); 


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

   // saving all data from ul list in the name of "data" in local storage
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
    //to display the data present in local storage using name "data"

}
showData();

  
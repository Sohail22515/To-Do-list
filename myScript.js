// console.log("hello");
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!")
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        listContainer.appendChild(task);
        let cross =document.createElement("span");
        cross.innerHTML="\u00d7";
        task.appendChild(cross);
    }
    saveData();
    inputBox.value='';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} ,false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showList();
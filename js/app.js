let input = document.querySelector("input");
let add = document.querySelector(".inputtasks button");
let del = document.querySelectorAll(".delete");
let inputTasks = document.querySelector(".tasks");

let Add = () => {
    if(input.value!==''){
        inputTasks.innerHTML = `<div class="individualTask">
        <p>${input.value}</p>
        <button class="delete"><span class="material-symbols-outlined">delete</span></button>
        </div>`
        input.value = '';
    }else{
        alert(`Task is Empty!`);
    }
}

add.addEventListener("click", Add);

for(items of del){
    items.addEventListener("click",()=>{
        console.log("Deleted!");
    })
}
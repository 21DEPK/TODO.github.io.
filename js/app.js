let input = document.querySelector("input");
let add = document.querySelector(".inputtasks button");
let inputTasks = document.querySelector(".tasks");
let del = inputTasks.children;

let Add = () => {
    if (input.value !== '') {
        inputTasks.innerHTML += `<div class="individualTask">
        <p>${input.value}</p>
        <button class="delete" onclick="deleteDynamicTasks();"><span class="material-symbols-outlined">delete</span></button>
        </div>`;
        input.value = '';
        deleteDynamicTasks();
    } else {
        alert(`Task is Empty!`);
    }
}
function deleteDynamicTasks() {
    if (del.length !== 0) {
        for (let i = 0; i < del.length; i++) {
            del[i].lastElementChild.addEventListener("click", () => {
                del[i].remove();
            })
        }
    }
}
add.addEventListener("click", Add);

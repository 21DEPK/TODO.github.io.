let input = document.querySelector("input");
let add = document.querySelector(".inputtasks button");
let inputTasks = document.querySelector(".tasks");
let del = inputTasks.children;
let len = del.length;

let Add = () => {
    if (input.value !== '') {
        inputTasks.innerHTML += `<div class="individualTask">
        <p>${input.value}</p>
        <button class="delete"><span class="material-symbols-outlined">delete</span></button>
        </div>`;
        len++;
        input.value = '';
        deleteDynamicTasks();
    } else {
        alert(`Task is Empty!`);
    }
}
function deleteDynamicTasks() {
    for (let i = 0; i < len; i++) {
        del[i].lastElementChild.addEventListener("click", () => {
            del[i].remove();
            len--;
        })
    }
}
add.addEventListener("click", Add);

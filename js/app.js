let input = document.querySelector("input");
let add = document.querySelector(".inputtasks button");
let inputTasks = document.querySelector(".tasks");

let Add = () => {
    if (input.value !== '') {
        inputTasks.innerHTML += `<div class="individualTask">
        <p>${input.value}</p>
        <button class="delete" onclick="this.parentElement.remove();"><span class="material-symbols-outlined">delete</span></button>
        </div>`;
        input.value = '';
    } else {
        alert(`Task is Empty!`);
    }
}
add.addEventListener("click", Add);
window.addEventListener("keypress", (k) => {
  if (k.key == "Enter") {
    Add();
  }
});

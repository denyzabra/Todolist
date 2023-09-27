// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const newTaskItem = document.createElement("li");
        newTaskItem.innerText = taskText;

        // Add a class for styling
        newTaskItem.classList.add("task");

        // Add a click event listener to mark a task as completed
        newTaskItem.addEventListener("click", function () {
            this.classList.toggle("completed");
        });

        taskList.appendChild(newTaskItem);
        taskInput.value = "";
    }
}

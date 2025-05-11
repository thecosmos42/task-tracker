// Listen for task submission
document.querySelector(".input-container").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector("#task-input");
    const taskText = input.value.trim();

    if (taskText) {
        // Create task elements
        const li = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Button container
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-group");

        // Done/Undo button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Done";
        completeButton.classList.add("complete-button");

        completeButton.addEventListener("click", () => {
            taskSpan.classList.toggle("completed");

            if (taskSpan.classList.contains("completed")) {
                completeButton.textContent = "Undo";
                li.parentElement.appendChild(li); // Move to end
            } else {
                completeButton.textContent = "Done";
                li.parentElement.prepend(li); // Move to top
            }
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", () => {
            li.remove();
        });


        // Append buttons and task to list item
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(taskSpan);
        li.appendChild(buttonContainer);

        // Add task to the top of the list
        document.querySelector("#task-list").prepend(li);

        // Clear input
        input.value = "";

        document.querySelector("#clear-tasks").addEventListener("click", () => {
            const taskList = document.querySelector("#task-list");
            taskList.innerHTML = "";

        });
    }
});



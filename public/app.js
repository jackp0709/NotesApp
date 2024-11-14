function addNote() {
    // Select elements
    const titleInput = document.getElementById("note-title");
    const contentInput = document.getElementById("note-content");
    const notesContainer = document.getElementById("notes");

    // Get input values
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // Check if inputs are empty
    if (title === "" || content === "") {
        alert("Please enter both title and content.");
        return;
    }

    // Create note element
    const note = document.createElement("div");
    note.className = "note";

    const noteTitle = document.createElement("div");
    noteTitle.className = "note-title";
    noteTitle.textContent = title;

    const noteContent = document.createElement("div");
    noteContent.className = "note-content";
    noteContent.textContent = content;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        notesContainer.removeChild(note);
    };

    // Append elements to note
    note.appendChild(noteTitle);
    note.appendChild(noteContent);
    note.appendChild(deleteBtn);

    // Add note to container
    notesContainer.appendChild(note);

    // Clear input fields
    titleInput.value = "";
    contentInput.value = "";
}

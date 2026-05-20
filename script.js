

function GetText() {
    const TextLabel = document.getElementById("TextLabel");
    const List = document.getElementById("List");
    const Text = TextLabel.value;



    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
  
    
    
    deleteButton.textContent = "Delete"
    deleteButton.className = "DeleteButton";

    editButton.className = "editButton";
    editButton.textContent = "Edit";

    li.className = "list";

    checkbox.type = "checkbox";
    checkbox.className = "list-checkbox"

    label.textContent = Text;
    label.className = "list-text";

    div.className = "TextBoxStyle";
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(deleteButton);
    div.appendChild(editButton);

    if(Text.trim() === "") return;
    
  
   
    List.append(li)
    li.style.padding = "5px"
    li.appendChild(div)
    List.appendChild(li)
    TextLabel.value = "";

    deleteButton.addEventListener('click', function(){
    div.remove();
    li.remove();
    })
let isEditing = false;
    editButton.addEventListener('click', function(){
        if (isEditing) return;
        isEditing = true;
        const EditInput = document.createElement("input");

        EditInput.type = 'text';
        EditInput.value = label.textContent;
        
        label.remove();
        div.appendChild(EditInput)
        EditInput.focus();
        

        EditInput.addEventListener("keydown", function(event){
            if (event.key === "Enter") {
                label.textContent = EditInput.value;
                EditInput.remove();
                div.insertBefore(label, deleteButton); 
                isEditing = false;
            }

        })
    })


    
}
document.getElementById("TextLabel").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        GetText();
    }
})



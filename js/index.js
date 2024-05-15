function createParagraph() {
    // Get the value of the input tag and assign it to a var
    let input = document.querySelector(".input");
    let text = input.value;
    

    // Don't return anything if the text input is empty
    if (text == false) {
        return;
    }
    
    // Create a new paragraph element
    let para = document.createElement("div");
    // Assign the value of the input tag to the value of the paragraph
    para.textContent = text;
    // Add the css class to the paragraph
    para.classList.add("content-paragraphs");
    // Append the paragraph the the div
    let content = document.querySelector(".content");
    content.appendChild(para);
    // Clear the value of the input tag
    input.value = "";
    // Focus on the input tag
    input.focus();
    return;
}

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", function() {createParagraph()});

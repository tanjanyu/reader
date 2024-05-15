let paraTally = 0;

// To keep track of dark mode status for the dark mode function
let darkModeOn = Boolean(0);

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
    paraTally++;
    para.classList.add("content-paragraphs");
    para.classList.add("div" + String(paraTally));
    // Append the paragraph the the div
    let content = document.querySelector(".content");
    content.appendChild(para);
    if(darkModeOn) {
        document.querySelector(".div" + String(paraTally)).setAttribute("style", "color: white;");
    }
    // Clear the value of the input tag
    input.value = "";
    // Focus on the input tag
    input.focus();
    return;
}

function clearText() {
    while (paraTally > 0) {
        document.querySelector(".div" + String(paraTally)).remove();
        paraTally--;
    }
    document.querySelector(".input").focus();
}

function darkMode() {
    // Change colours/look of
    // Dark mode button
    darkModeOn 
    ? document.querySelector(".dark-mode-img").src = "./images/Button-Light.png"
    : document.querySelector(".dark-mode-img").src = "./images/Button-Night2.png";
    // Text Area
    darkModeOn
    ? document.querySelector(".input").classList.remove("dark-textarea")
    : document.querySelector(".input").classList.add("dark-textarea");
    // Clear and Add buttons
    darkModeOn
    ? document.querySelector(".clear-button").removeAttribute("style")
    : document.querySelector(".clear-button").setAttribute("style", 
    "background-color: #787575; border-color: #3c3c3c; color: white");
    darkModeOn
    ? document.querySelector(".add-button").removeAttribute("style")
    : document.querySelector(".add-button").setAttribute("style", 
    "background-color: #787575; border-color: #3c3c3c; color: white");
    // Background
    darkModeOn
    ? document.querySelector("body").removeAttribute("style")
    : document.querySelector("body").setAttribute("style", "background-color: black;");
    // Existing content
    let tempParaTally = paraTally;
    while(tempParaTally > 0) {
        darkModeOn
        ? document.querySelector(".div" + String(tempParaTally)).removeAttribute("style")
        : document.querySelector(".div" + String(tempParaTally)).setAttribute("style", "color: white;");
        tempParaTally--;
    }

    darkModeOn
    ? (darkModeOn = Boolean(0))
    : (darkModeOn = Boolean(1));
}

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", function() {createParagraph()});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function() {clearText()});

const darkModeButton = document.querySelector(".dark-mode");
darkModeButton.addEventListener("click", function() {darkMode()});
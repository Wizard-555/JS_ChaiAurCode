// creating a div
const div = document.createElement('div')
div.className = "main"
div.id = "myId"
div.setAttribute("title", "my generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
div.style.fontSize = "25px"

console.log(div);

// adding text to it
const addText = document.createTextNode("Chai aur code")
div.appendChild(addText)

// attaching this div to document
document.body.appendChild(div)
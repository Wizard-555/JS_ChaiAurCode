// creating a funtion to add more languages in the list in optimised way
function addLanguage(languageName){
    const li = document.createElement('li')
    const addLan = document.createTextNode(languageName)
    li.appendChild(addLan)
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
addLanguage("cpp")
addLanguage("goLang")


// edit 
const thirdLang = document.querySelector("li:nth-child(3)")
const newLang = document.createElement('li')
newLang.textContent = "TypeScript"
thirdLang.replaceWith(newLang)


// remove element
const lastElement = document.querySelector("li:last-child")
lastElement.remove()
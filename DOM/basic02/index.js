// changing color
const bgColor = document.getElementById('bg-color')
bgColor.style.backgroundColor = "#212121"
bgColor.style.color = "#fff"



// accesing child with their parents
const parent = document.querySelector('.parent')
console.log(parent)
const childs = parent.children    //  ****** 
console.log(childs) // it will give the HTMLCollection of children
console.log(childs[1].innerHTML)

childs[2].style.color = "pink"

// appling loop
for(let i=0; i<childs.length; i++){
    console.log("->" + childs[i].innerHTML)
}
// assecsing 1st element in parent
console.log(parent.firstElementChild.innerText)
// assecing the last element of parent
console.log(parent.lastElementChild.innerText)



// accessign siblings
const dayOne = document.querySelector('.day')
console.log(dayOne.nextElementSibling.innerHTML)

// accesing parent with their child
console.log(dayOne.parentElement)

// checking node list (of DOM Tree)
console.log("NODES : ", parent.childNodes)
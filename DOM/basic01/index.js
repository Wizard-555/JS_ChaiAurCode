const tittle = document.getElementById('tittle')

// css properties
tittle.style.backgroundColor = 'lightGreen'
tittle.style.padding = "15px"
tittle.style.borderRadius = "20px"

// innerText innerHTML textContent
console.log(tittle.innerHTML);
console.log(tittle.innerText);
console.log(tittle.textContent);

// querySelector
document.querySelector('#tittle')
document.querySelector('h2')   // it will show only first h2
document.querySelector('.heading')

//querySelectorAll
document.querySelectorAll('h2')


//for ul and li
const myUl = document.querySelector('ul')
const myLi = myUl.querySelectorAll('li')
// changing bg for all li
myLi.forEach(li => {
    li.style.backgroundColor = "lightGreen"
    li.style.color = "red"
    li.style.fontSize = "30px"
});
//changing name of first list
const firstLi = myUl.querySelector('li')
firstLi.innerText = 'five'


// getElementByClassName
const classItem = document.getElementsByClassName('list-item')
// convert it to arrat
const classItemArray = Array.from(classItem)
//now we can perform operations
classItemArray.forEach( function (li){
    li.style.color = 'blue'
    li.style.fontSize = "40px"
})
/* // use of setTimeOut
setTimeout(function (){
    console.log("TIME UP 5sec...")
},3000)
*/

// more example
const changeText = function(){
    document.querySelector('h1')
        .innerHTML = "Only Chai no code"
}
const changeMe = setTimeout(changeText, 3000)

// now removing timeout after clicking on stop
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED");
})



// setIntervals

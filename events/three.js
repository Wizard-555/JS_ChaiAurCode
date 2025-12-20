// set intervals
const sayDate = function(){
   console.log("TIME ->", Date.now())
} 
const intevalId = setInterval(sayDate, 2000)
// to stop this
clearInterval(intevalId)
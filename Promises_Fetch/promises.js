/* Syntex
new Promise(function(resolve,reject){})
.then()
.catch()
.finally()
*/


// Basic method to create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task  (like - Db calls, network calls)
    setTimeout(function(){
        console.log("Async function is called")
        resolve()     // it directly connects the .then() function
    }, 2000)
})
// consuming promise
promiseOne.then(function(){      // .then() is directly connected with the resolve() function
    console.log("Promise consumed successfully")
})



// Another way to create and consume promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 created")
        resolve()
    }, 3000)
}).then(function(){
    console.log("Async 2 consumed")
})



// Consuming another type of Data 
new Promise(function(resolve,reject){
    setInterval(function(){
        resolve({userName:"Kishan", Email:"kk@gmail.com"})
    }, 4000)
}).then(function(user){     // passing parameter
    console.log(user);
})



// using then() and catch() together
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("-------------------fourth--------------------")
        //let error  = false;
        let error = true;
        if(!error){
            resolve({userName:"Kishore", Email:"kkkkk@gmial.com"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },4500)
})
// applying then() and catch() on this promise
promiseFour
.then(function(user){    // connected to resolve
    console.log(user)
})
.catch(function(e){      // connected to reject
    console.log(e);
})



// chaining in then() and catch() together    and also use of finally()
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("-------------------fifth--------------------")
        let error  = false;
        if(!error){
            resolve({userName:"javaScript", Password:"123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },4500)
})
// applying then() and catch() on this promise
promiseFive
.then(function(user){  
    console.log(user)   
    return user.userName    // result will be returned to next then()
})
.then(function(userName){
    console.log("UserName -> "+userName)
})
.catch(function(e){      
    console.log(e);
})
.finally(() => {
    console.log("The Promise is either resolved or rejected")
})



// Use of async-await in place of then-catch
const promiseSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("-------------------Six--------------------")
        let error  = true;
        if(!error){
            resolve({userName:"javaScript", Password:"123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },5000)
})
// consuming Promises by using async-await
async function consumePromiseSix(){
    try{
        const response = await promiseSix
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
// call async function
consumePromiseSix()




// trying to fetch any random API
console.log("Fetching API...   (below code)");
// 1. using async-await
/*
async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        const data = await response.json()   // it will also takes time therefore we are using await
        console.log(data)
        console.log("------------------------------------------------------------------")
    }catch(e){
        console.log("E : Error...")
    }
}
getAllUser()  */

// 2. using then-catch   (for post)
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json()
})
.then((data) => console.log(data))
.catch(() => console.log("-------------ERROR-------------"))
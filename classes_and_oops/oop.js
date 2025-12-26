// Object literals
const user = {
    username: "Kishan",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);       // this -> it will tell us about current context
    }

}
console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);           // here it will tell about global context (document or Window)




// use of constructor
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this      // we can remove this line also, because retur happend automatically
}
// constructor function (or call)
const userOne = new User("Ram", 12, true)
const userTwo = new User("Mohit", 11, false)
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);

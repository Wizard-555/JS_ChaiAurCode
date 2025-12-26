/*
let myName = "Kishan     "
console.log(myName.trim().length)
console.log(myName.trueLength);     // why this property is not working
*/


let myHeros = ["thor", "spiderman"]     // Array

let heroPower = {                        // Object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kishan = function(){       // adding our own prototype to main Object (main root)
    console.log(`kishan is present in all objects`);
}

Array.prototype.heyKishan = function(){     // adding our own prototype to Array
    console.log(`Kishan says hello`);
}

// heroPower.kishan()
// myHeros.kishan()
// myHeros.heyKishan()
// heroPower.heyKishan()




// Solving the above problem of trueLength (by creating our own Prototype)
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    //console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Kishan   ".trueLength()
"iceTea".trueLength()
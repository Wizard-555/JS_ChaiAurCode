class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){     // it will not allow anyone to access createId() method
        return `123`
    }
}

const Kishan = new User("Kishan")
// console.log(Kishan.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
//console.log(iphone.createId());
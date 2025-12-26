// inheritance  (without using class)
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
// inheriting Teacher with User  (Old Method-1)
Teacher.__proto__ = User


// ex-2
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport     // (Old Method-2)
}


// modern syntax *****
Object.setPrototypeOf(TeachingSupport, Teacher)
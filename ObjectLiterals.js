//Singleton Object
//Object.create


//Symbol data type
const mysym = Symbol("key1")

//object Literals
const JsUser = {
    name: "Nikita",
    age: 23,
    [mysym]: "mykey1",
    location: "Durgapur",
    email: "nikita@gmail.com",
    lastLogging: ["Monday", "Thursday"]
}
// we can access the objects in two ways

//square brackets property accessor
console.log(JsUser["email"])

//dot property accessor
console.log(JsUser.location)

console.log(JsUser[mysym])

console.log(JsUser.name = "Nikitaaaa")

//to make it constant
Object.freeze(JsUser)
//singleton 

//object literals

const sym = Symbol("key1");


const jsUser = {
    name : "Sayak",
    age : 21,
    [sym] : "myKey1",
    location: "Kolkata"

}

console.log(jsUser.name); // dot property accessor 
console.log(jsUser["name"]); //double notation or squre barket property accesser
console.log(typeof jsUser[sym]);


//to freez a object 
Object.freeze(jsUser)

jsUser.name = "sujan";

console.log(jsUser.name);


//greetings

//What happens when you run javascript code?
//when you run javascript program "execution context" is created.

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square3 = square(4);

//js program executed line by line
//execution context is created
//memory will contain variable n:that is undefined, square function with their body{},square2 variable with undefined value,square3 with undefined value
//code- 2 value is assigned to n then function square will start executing ans it will contain again two component memory and code ,

//javascript has its own call stack and everytime at the bottom of the stack we have our global execution context
//call stack ,maintains the order of execution of execution contetxts.
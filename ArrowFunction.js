//The arrow Function is one of the features introduced in the ES6 version of javascript. It allows you to create funvtions in a cleaner way compared to regular functions. Here are some of valid syntax for arrow function:
//Difference between arrow function and regular function
//1. Arguments objects are not available in arrow functions but it is available in regular function
const exam = function (x, y) {
    console.log(arguments);//to check how many arguments has been passed inside this function(so object argument is avilable in normal function only)
    return x + y;
}
exam(3, 4);

//2. Regular functions created using declarations or expressions are 'constructable' and 'callable'.
//we can not create constructor inside the arrow function
function Data(name, age, department) {
    this.Student_Name = name;
    this.Student_Age = age;
    this.Student_Department = department;

}
const Student1 = new Data("Sumit", 19, "CSE");//Here Data()is a contructor
console.log(Student1);

//3. Arrow functions do not have their own this
//4. Implicitly returned by the arrow function
/**Arrow functions are anonymous functions i.e. functions without a name and are not bound by an identifier. 
Arrow functions do not return any value and can be declared without the function keyword. 
They are also called Lambda Functions.

Advantages of Arrow Functions
Arrow functions reduce the size of the code.
The return statement and function brackets are optional for single-line functions.
It increases the readability of the code.
Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing scope.
 This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.
 * 
 */
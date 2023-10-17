//When we want to store the data for a temporary purpose then we use javascript
num = 2 + 2
console.log(num);
//Differnce between var,let and Const
/*var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
While var and let can be declared without being initialized, const must be initialized during declaration. */

var myname = 'Nikita Modi';
var myname = 'Modi Ji';// we can re-declare
myname = 'Nikitaaa';// we can re-assign
console.log(myname)//Updated value will ve the output


let name = 'Nibedita Modi';
//let name='Modi';//We can not re-declare 
name = 'Modi';// we can re-assign
console.log(name);

const name2 = "Yanishi";
//const name2="Modi"; we can not re-declare
//name2 = 'Niki'; we can not re-assign



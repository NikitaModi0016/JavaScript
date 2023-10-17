//Hoisting in javascript
/**Hoisting is a concept that enables us to extract values
 *  of variables and functions even before 
 * initializing/assigning value without getting 
 * errors and this happens during the 1st phase 
 * (memory creation phase) of the Execution Context. */
getName();
console.log(x);
var x = 7;
function getName() {
    console.log("Namaste Javascript");
}

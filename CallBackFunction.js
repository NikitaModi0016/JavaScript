/**A callback function is function that is passed as an argument to another function,
 * and it is called after the main function has finished its execution.
//Callback function is used to handle the results of asynchronous operations in a non blocking manner.
*/
const cart = ["Shirt", "Jeans", "Shoes", "Kurta"];

createOrder(cart, function (orderId) {
    ProceedToPayment(orderId);
}
);


const cal = (a, b, operations) => {
    return operations(a, b);
}
const result = cal(4, 8, (num1, num2) => {
    return num1 + num2;
})
console.log(result);

function multiply(a, b) {
    return a * b;
}
const mul = cal(8, 2, multiply)
console.log(mul);
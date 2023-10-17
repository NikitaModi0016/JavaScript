// + - * / -operators in javascript

var num1 = 7;
var num2 = 9;

console.log(num1+num2);

console.log(num1*num2);

console.log(num1/num2);

console.log(num1-num2);


var answer = num1>num2;
console.log(answer);



//----------Discount percentage
// D - discount, ,L- list price, S- shelling price

// D = (L-S)/L *100;


var sellingPrice = 199;
var listPrice  = 799;

var Discount = (listPrice - sellingPrice) / listPrice * 100;
//console.log("Discount percentage is : " +Discount +"%");

displayDiscountPercentage = Math.round(Discount);
console.log("Discount percentage is : " + displayDiscountPercentage +" %OFF");

var result = listPrice > sellingPrice;

console.log(typeof result);




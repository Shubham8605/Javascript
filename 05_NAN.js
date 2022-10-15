var myResult =  0/0;
console.log(myResult);
console.log(typeof myResult);

var myName = "shubham";
var myAge = "24";
console.log(typeof myName);
console.log(myAge,typeof myAge);

var myAgeInNumber = +myAge;
console.log( myAgeInNumber, typeof myAgeInNumber);

var myName = "test";
console.log(typeof myName);

var myNameString = +myName;
console.log(myNameString,typeof myNameString);

var oprand1 = +"100";
var oprand2 = +"200";
console.log(oprand1 +oprand2);
console.log(oprand1 == 100);

console.log("===impliciate conversion=====");
console.log("4"-true);

var operand2 = 200;
console.log(oprand2,typeof operand2);
var operand2Str = operand2.toString();
console.log(operand2Str,typeof operand2Str);
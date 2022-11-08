console.log("==========with no args & no return value======");
function arrow (){
    console.log("Goog Evening.Today is Saturday");
}
arrow()


console.log("=====with 3 args no return value 3 parameters multiplication======");
let multiplication = (n1,n2,n3) => n1*n2*n3;
console.log("multiplication of 5,5,2 is");
console.log(multiplication(5,5,2));


console.log("===Invoke the same function=========");
let multi = (n4,n5) => n4*n5
console.log(multi(10,4));

console.log("======addition of 5 args====== ");
let addition = (n11,n12,n13,n14,n15) => n11+n12+n13+n14+n15
console.log(addition(100,100,200,349,756));

let ram = function(){
    console.log("I am" ,"leaning","ES6","features","in", "depth");
}
ram()
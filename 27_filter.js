
let arrayOfNumber = [ 2,3,5,4,6,1];

let newArray = arrayOfNumber.map((element)=>{
    return element >=4 ;// false false
});
console.log(newArray);


console.log("====reduce====");
let sum = arrayOfNumber.reduce((value,runningTotal)=>{
    return value + runningTotal;
},100);
console.log(sum);
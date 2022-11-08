
let show =  (n1,test) => 
console.log(show);

const arrayNumber = [10,20,30,40,20,10];
//arrayNumber.forEach(function(currentValue, index, array){
    //console.log(currentValue,index,array);
//});

arrayNumber.forEach((currentValue) => {
    console.log(currentValue);
});






console.log("===== Traversing set using forEach() =====");
new setOfNumbers = new set(setOfNumbers);
setOfNumbers.forEach((value) => {
    console.log(value);
});





console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
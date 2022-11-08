const arrayOfNumber = [ 2,3,5,4,6,1];

const newArray = arrayOfNumber.map((element,index)=> {
    if(index<=2){
        return element +5;
    }
});

console.log(newArray);
console.log(arrayOfNumber);
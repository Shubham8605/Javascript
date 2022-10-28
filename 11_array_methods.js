let arrayOfNumber = [1, 3, 7, 8, 9, 3,7];
arrayOfNumber[4] = 11;
console.log(arrayOfNumber);
arrayOfNumber.unshift(5);
console.log(arrayOfNumber);

console.log(arrayOfNumber.includes(7));
console.log(arrayOfNumber.includes(9));


console.log("============ slice() ===========");
let arrayNumbers  = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log("============ splice() ===========");
let array  = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array);
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
let splicedElements =  array_numbers.splice(4);
console.log(splicedElements);
console.log(array_numbers);
//for (let index = 0; index < arrayOfNumber.length; index++) {
    //const element = arrayOfNumber[index];
    //console.log(element);
    
//}

//for (const key in arrayOfNumber) {
    
        //const element = arrayOfNumber[key];
        //console.log(element);
  //  }
    //let totalElement = arrayOfNumber.length-1;
    //for (let index = totalElement; index >=0; index--) {
     //   const element = arrayOfNumber[index];
      //  console.log(element);
   // }
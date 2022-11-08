
const arrayOfName = ["Anil","Ram","Shyam","Nutan"];
arrayOfName.sort();
console.log(arrayOfName);

const arrayOfNumber = [2,3,4,5,6,1];
arrayOfNumber.sort((first,second)=>{
    return(first>second ? 1:-1)
})


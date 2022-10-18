var myName = "Mohit";

// 10 to 0
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);


// count  the 
console.log("count the total number of vowels using includes () for string good morning IT champ");
var myString = "Good Morning IT Champ";
var vowels = "aeiou";
for (let index = 0; index < myString.length; index++) {
   var char  =  myString.charAt(index);
   var isAvailable = vowels.includes(char);
   console.log(char, isAvailable);
}
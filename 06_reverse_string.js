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
   if (isAvailable) {
    console.log(char, isAvailable);

   }
}

// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");

console.log("============================");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");
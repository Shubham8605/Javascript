
var greet = "Good Morning"

console.log(greet);

var count = greet.length;
console.log(count);

console.log(greet.length);

var sonali = greet.charAt(8);
console.log(sonali);

console.log(greet.charAt(8));

var char = greet.indexOf("0");
console.log(char);
console.log(greet.indexOf("bro"));
console.log("==========");
console.log(greet.charAt(-2));


var fname = "virat";
var lname = "kohali";
var result = fname.concat(" ",lname)//virat
console.log(result); 

console.log("==========");
var greet = "Good Morning bro and sis"
 var replaceDemo = greet.replace("Morning","Evening")
 console.log(replaceDemo);


 console.log("==========");
console.log( replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());


console.log("=========trim=========");
var greet = "  Good Morning bro and sis";
console.log(greet.length);
var trimResult = greet.trim();
console.log(trimResult.length);


console.log("=========include=========");
var greet = "  Good Morning bro and sis";
console.log(greet.includes("Bro"));


console.log("========substring=========");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13,17));

console.log("====slice=======");
console.log(greet.slice(13));
console.log(greet.slice(13,17));

console.log("====split()=======");
var studentList = "Sunil, Anil, Andy, Jenny, Lata";
 var splitResult = studentList.split(',');
 console.log(splitResult);
   
 
 var impQuote = `"Do or Die " this attitude is important for this training`;
 console.log(impQuote);

 var fname = "Virat";
 var lname = "Kohli";

 // First Name:${fname} Last Name : ${lname};
 console.log(`First Name : ${fname} and Last Name : ${lname}`);
   
 var res = " Hey you are doing good keep it up";
 res.endsWith("up");
 
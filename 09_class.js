class Person {
     
    constructor (fullName,city,age,gender){
          this.fullName = fullName;
           this.city = city;
           this.age = age;
           this.gender = gender;
    }
}
details(){
    console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
}
let sachin = new Person("Sacin kale","pune","45","male");
let Rohit = new Person("Rohit sharma","mumbai","32","male");
console.log(sachin);
console.log(Rohit);


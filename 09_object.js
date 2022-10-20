let varible_name = "";

let mohitPerson = {
    fullName: "sachin",
    age: 42,
    isMarried: true
}
console.log(object.entries(mohitPerson));
console.log(object.keys(mohitPerson));
console.log(object.value(mohitPerson));

let person = {
    fullName: "Schin Tendulkar",
    city:"mumbai",
    age:"42",
    isMarried: true,
    address:{
        street:"AsClub",
        pin_code:123565,
        city:"pune",
        state:"MH"
    },
    eat:function(){
        console.log("i am vegetarian");
    },
    details: function(){
        let personDetails =`Details are : ${this.fullName},${this.age},${this.address.city}`;
        return personDetails;
    }

}
let pDetails = person.details();


console.log(typeof person);
console.log(person.address);
console.log(person.address.street);
person.address.road = "main road";

person.eat();


person.pincode = 443102;
person.profession = "Angular Developer";

console.log(person);

console.log(person.city);
console.log(person["age"]);

let personFullName = person.fullName;
console.log(personFullName);
console.log(person.fullName);
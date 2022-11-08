'use strict'

let person = {
    fullName: "Mohit Sharma",
    age:31,
    city:"pune",
    pin: 443102,
    state: "MH",
    isMarried: "true"
}
//let fullName =  person.fullName;
//let city = person.city;
//let pin = person.pin;
//let state = person.state;
//let isMarried = person.isMarried;


let { fullName, city, pin, state, isMarried} = person;
console.log( fullName, city, pin, state, isMarried);


let arrayOfName = ["monu", "sonu", "golu", "dholu","chintu","lalu"]
//let ele0 = arrayOfName[0];
//let ele1 = arrayOfName[1];
//let ele2 = arrayOfName[2];
//let ele3 = arrayOfName[3];
//let ele4 = arrayOfName[4];
//let ele5 = arrayOfName[5];

let[ele0,ele1,ele2,ele3,ele4,ele5] = arrayOfName;
console.log(ele0,ele1,ele2,ele3,ele4,ele5);
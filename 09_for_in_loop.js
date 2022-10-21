const mohitPerson = {
    fullName: "Sachin Tendulkar",
    age: 42,
    "is Married": true
}

for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}
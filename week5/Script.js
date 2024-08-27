// console.log("week5");
// // this is a comment
// // this is another comment
// let myName = "Alice";
// const myCity02 = "Melbourne";
// console.log(myName, "lives in", myCity02);
// console.log(`${myName} lives in ${myCity02}`);

// let count = 10;
// console.log(count);

// let isItMorningClass = true;
// let otItAfternnonClass = false;

// let myStudentRecord = {
//     name: "Ryan",
//     id: 3994551,
//     class:"OART1013",
//     isItScience: false,
//     isItDesign: true,

// }

// console.log("Hello everyone, my name is", myStudentRecord.name);
// console.log("My id is", myStudentRecord.id);
// console.log("My class is", myStudentRecord.class);
// console.log("Are you science student?", myStudentRecord.isItScience);

// const numberArray = [2,4,6,8,10];
// console.log(numberArray[2]);
// myStudentRecord.isItScience = true
// if (myStudentRecord.isItScience === true) {
//     console.log("Sorry you are in the wrong class");
// } else {
//     console.log("Welcome to OART1013");
// }

// let myScore = 80;
// if (myScore >= 90)
// {
//     console.log("You scored a HD");
// } else if (myScore <90 && myScore >=70) {
//     console.log("You scored a D");
// } else if (myScore <70 && myScore >=50) {
//     console.log("You scored a C");
// } else {
// console.log("You scored a P");
// }

// console.log("Hello Sarah");
// console.log("Hello Peter");
// console.log("Hello Alice");
// console.log("Hello Robert");
// console.log("Hello Jenny");

// const names = ["Sarah","Peter","Alice","Robert","Jenny"];

// for (let i=0; i<names.length; i++) {
//     console.log("Hello", names[i]);
// }

let shoppingCart = [
  { name: "T-Shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(total);
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum = sum + shopppingCart[i].price;
  console.log(("intermediate sum", sum));
}

console.log(sum);

"use strict";
let lname = "manna";
// lname = 10 
/* in ts you can not do it */
let lnamets;
lnamets = "bike";
let newname = lnamets.toLocaleUpperCase();
console.log(newname);
let age;
age = 25;
// age = "25"
age = 23.5;
let dob = "45";
let result = parseInt(dob);
// let isvalid : boolean;
// console.log(isvalid); /* it give you warning but if you run it get value undefine */
let isvalid = false;
console.log(isvalid);
let maketlist;
// maketlist = ["p","K",'i',5]
maketlist = ["p", "K", 'i', "h"];
let numlist = [1, 5, 3, 5, 6];
let resultlist = numlist.filter((num) => num > 2);
// let num = numlist.find((num)=> num ===2) /* this is undefine because of no match number */
let num = numlist.find((num) => num === 5);
let alp = maketlist.find((num) => num === 'k');
let alp1 = maketlist.find((num) => num === "k");
let sum = numlist.reduce((acc, num) => acc + num);
console.log(resultlist);
console.log(num);
console.log(alp);
console.log(alp1);
console.log(sum);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
let c = Color.Green;
let swepnumber;
function swap(num1, num2) {
    return [num2, num1];
}
swepnumber = swap(12, 21);
console.log(swepnumber);
let deplist;

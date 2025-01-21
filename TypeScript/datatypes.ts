let lname = "manna"

// lname = 10 
/* in ts you can not do it */

let lnamets : string;

lnamets = "bike"

let newname = lnamets.toLocaleUpperCase();

console.log(newname)

let age : number ;

age = 25;

// age = "25"

age  = 23.5
let dob = "45"

let result = parseInt(dob)

// let isvalid : boolean;

// console.log(isvalid); /* it give you warning but if you run it get value undefine */


let isvalid : boolean = false;

console.log(isvalid);


let maketlist : string[];

// maketlist = ["p","K",'i',5]

maketlist = ["p","K",'i',"h"]

let numlist = [1,5,3,5,6]

let resultlist = numlist.filter((num) => num >2);
// let num = numlist.find((num)=> num ===2) /* this is undefine because of no match number */
let num = numlist.find((num)=> num ===5)

let alp = maketlist.find((num)=> num ==='k')
let alp1 = maketlist.find((num)=> num ==="k")

let sum = numlist.reduce((acc,num)=> acc +num);

console.log(resultlist)
console.log(num)
console.log(alp)
console.log(alp1)
console.log(sum)


enum Color {
    Red,
    Green,
    Blue,
    White
}

let c : Color = Color.Green;


let swepnumber : [f:number,s:number];

function swap (num1 : number,num2 : number) : [number,number] {
    return [num2 , num1]
}
swepnumber = swap(12,21);
swepnumber[0];
// swepnumber[2]
swepnumber[1]

console.log(swepnumber);

let deplist : Array<string>;


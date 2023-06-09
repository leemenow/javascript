let btn = document.querySelector(".test_btn");
btn.onclick = function(){
    alert("hello i am the second test button on the page");
}

// Variables
var test;  
    test =34;
var ay ="Ayo Ayodeji";

let myBro = "Mozillar 2022";
const age =13;
let dob ="19/12/2009";

console.log(test)

 

// DATA TYPES AND STRUCTURES
// Strings

let name1 ="Ms. Ngozi 156";
let name2 = 'Mr. Peter 90';
let name3= `Hello I am ${name1} - ${230 + 450}`; // templte string    
console.log(name3);

let accountBalance = 4568900;
let account ="48575"

console.log(typeof accountBalance);
console.log(typeof account);

// console.log ( totalBalance);
// console.log (totalBalance2);

console.log(name1.toUpperCase() ); // convert to capital letters
console.log(name1.toLowerCase() ); // convert to small letters

let mystory ="    My name is Ngozi, Iam a Fullstack engineer and the author of HOW stuff Works in Javascript    ";

console.log(mystory[0]); //access the position of a character in mystory
console.log(mystory.length); // tell us the number of character in mystory

let numOfWords = mystory.split(" "); // split the mystory into substrins or words and return them as array

console.log( numOfWords);
console.log( numOfWords.length); // find the number of words in the mystory

console.log(mystory.trim());
console.log(mystory.trimEnd()); //remove whitespace from the beginning of the string

let conString = mystory.concat("NHGSD,IPHONES JAVAS");
console.log(conString);

let testStr = "HP|LENOVO| HOST|DELL|MAC";

let partTwo = testStr.repeat (3);

console.log(partTwo);

console.log(testStr .charCodeAt (0));
console.log(testStr.includes("D"));

console.log(testStr.indexOf("E"));

console.log(testStr.substring(2,10));

//NUMBERS
let myNum = 45;
let xNUM = "123.78654";

let xConverted = Number(xNUM);
let xConverted2 = parseInt(xNUM);
let xConverted3 = parseFloat(xNUM);

console.log(xNUM, xConverted, xConverted2, xConverted3);

let aprox = Number (xConverted3. toFixed(2));

console.log(aprox);

let xdiv = 23/0

console .log(xdiv); //typeof to tell a number

//float is a decimal

//udefined

let xtextme;
let nxObj = null;

console.log( nxObj );

//Data structures
// 1. Array]

// 2. Object
// 3. Map
// 4. Set


//Array:
let myArr = [

    "Ms. Ngozi",
    true,
    764,
    [1,4,5,8,9,0,1],

];

//reading from the array
console. log(myArr[0]);
console.log(myArr[3][1]);

//Writing to the array
myArr[0] = 1998;

myArr[4] = "Mr Chidi";



// push, unshift, shift, pop, pushing,
// slice, join, length, indexOf,

let newPush = myArr.push(45);
myArr . push("Huawei", "Honkong", "Togo", "Abijan");
//Adding items at the begining of the array
myArr.unshift(900,"Hungary", "Lagos", "Togo", "Ohio");

console.log(newPush);

//Remove elements from array

let removedItem = myArr.pop();
let shiftedItem = myArr.shift();

console.log( removedItem, shiftedItem);

// Using   the slice and spice
let firstcopy = myArr.slice(3,9);
let firstcopy2 = myArr.slice(3,-3);







// foEach and the map
myArr. forEach((item,index) => console .log(index,item));
myArr.map((item,index) => console .log(index,item));

let mProductPrices = [23000, 90000, 65000, 125000, 165000];
let seelingPriceLlist = mProductPrices.map((price) => 0.2*price + price);

console.log(seelingPriceLlist);




console.log
console.log(myArr);




//ASSINMENTS
//read garbbage collection: whats is & how array methods.







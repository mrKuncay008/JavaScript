let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number
   
let name = "Alice";
console.log(name); // -> string
console.log(typeof name)
console.log(typeof "Bob"); // -> string
   
let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;
   
console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean


let a = 1 / 0;
let b = -Infinity;
   
console.log(a); // -> Infinity
console.log(b); // -> -Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number
   
let s = "it's definitely not a number";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number

let kota = "Tangerang";
let negara = "Indonesia";

let tujuan =  `${kota} adalah ibu kota ${negara}.`;
console.log(tujuan);

let str = "java script language";
   
console.log(str.length); // -> 20
console.log('test'.length); // -> 4
   
console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'
   
console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'
   
console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.')); // -> ['192', '168', '1', '1']

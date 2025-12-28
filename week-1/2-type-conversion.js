//Converting to string 
//1.Using String();
//example 
let numToString = String(true);
console.log(`${numToString} is a ${typeof numToString}`);///this returns string although console.log(numToString) returns true
///the console displays the data without the ""
//2.Using .toString();
//example
let intToString = (123).toString();
console.log(`${intToString} is a ${typeof intToString}`);

//Converting to number
//1.Using Number();
//example
let stringToNum = Number("adsdf");
console.log(`${stringToNum} is a ${typeof stringToNum}`);
//2. Using parseInt();
let nullToNum = parseInt(null);
console.log(`${nullToNum} is a ${typeof nullToNum}`);
//3.Using parseFloat(); - used with decomals
let intToFloat = parseFloat("12.7");
console.log(`${intToFloat} is a ${typeof intToFloat}`);

//Converting to Boolean
//1.Using Boolean();
// examples
let num1 = Boolean(1);
console.log(`${num1} is a ${typeof num1}`);
let num0= Boolean(0);
console.log(`${num0} is a ${typeof num0}`);
let emptyString= Boolean("");
console.log(`${emptyString} is a ${typeof emptyString}`);
let nullData= Boolean(null);
console.log(`${nullData} is a ${typeof nullData}`);
let undefinedData= Boolean(undefined);
console.log(`${undefinedData} is a ${typeof undefinedData}`);
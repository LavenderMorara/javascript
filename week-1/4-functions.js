//Function - a block of code that performs a task and can be reused.
//syntax of a basic function
// function functionName(parameters){
//     code_block;
//     return value - is optional and is returned when program is run to completion
// };

//Parameters and arguments
// Parameters are placeholders when defining a function
//Arguments are actual values passed when calling a function
function greetUser(firstName, lastName){
    return `Hello, ${firstName} ${lastName}`;
}
console.log(greetUser("Chiya", "Morara"));
console.log(greetUser("John", "Doe"))

const greetings=(n1, n2)=>`Hi ${n1} ${n2}`
console.log(greetings("Chiya", "Morara"));
console.log(greetings("John", "Doe"))

//default parameter - ensure a parameter with default value is at the end
let greet=function( sn, fn = "Mercy",){
    return `Hey ${fn} ${sn}`
};
console.log(greet( "Morara"));
console.log(greet("John", "Doe"))
//Types of functions
//1. Function expression - functions stord in variables
//syntax
// const/let variable_name = function(arguments){
//     code_block;
//     return value ;
// };
//example 
let add = function(a,b){
    return a+b;
};
console.log(add(4,5))

//2.Arrow functions
//syntax
//const/let variable_name = (arguments) => expression ;
//example
let square =(num)=>num * num;
console.log(square(4))

//3.Immediately invoked functions - automatically rin when defined can be named or anonymous
//syntax
// (function(){
//     code_block;
//     return value ;
// })(); - has no semi colon after curly braces.
console.log((function(num1, num2){
    return num1 + num2;
})(3,8));

//4.call-back fucntions - passed as an argument in another function.
// syntax
// function fucntion1(arg1){
//     code_block; 
// };

// function function2(arg1, callback){ - function2 decides when to call function2
//     code_block;
//     callback(arg1);
// };

// function2("asdf", fucntion1);
//example
function multiplyNums(n1, n2){
    return n1 * n2;
}

function processNums(n1, n2, callBack){
    console.log("processing numbers");
    console.log(callBack(n1, n2));
};

processNums(4,7,multiplyNums);
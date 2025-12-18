// conditionals
// 1. If statement- block code runs only if the condition is true
//Syntax 
// if(condition){
//     codeBlock;
// };
//example
let age=16;
if(age>=18){
    console.log("You are an adult");
};
//running js code in terminal
//node filename.js

// 2. if...else statement - the codeblock under if runs if condition is true and when condition is false the codebock under else runs
//Syntax
// if(condition){
// codeBlock
// }else{
//     codeBlock
// };
//example
let umri = 18;
if(umri >=18){
    console.log("Adult")
} else{
    console.log("Minor")
};

// 3. else if statement - used to check multiple conditions
//syntax
// if(condition){
//     codeblock
// }else if(condition){
//     codeblock
// }else{
//     codeblock
// };
// example
let marks = 60;
if(marks>=80){
    console.log("Grade : A")
}else if(marks>=70){
    console.log("Grade : B")
}else if(marks>=60){
    console.log("Grade : C")
}else if(marks>=50){
    console.log("Grade : D")
}else if(marks>=40){
    console.log("Grade : E")
}else{
    console.log("Grade : F")
}

// 4. Nested if statements - used to check multiple conditions under a single entry where the second is dependent on the first
// Syntax
// if(condition1){
//     if(condition2-dependent-on-condition1){
//         blockcode
//     }else{
//         blockcode
//     }
// }else{
//     blockcode
// };
//example
let yearsOld = 20;
let hasId = true;

if( yearsOld >= 18){
    if(hasId){
        console.log("Entry Allowed")
    }else{
        console.log("Entry Denied")
    }
}else{
    console.log("Too Young")
};
// 5. Ternary operator - its a shorter syntax for if..else
//syntax
//condition ? valueIfTrue : valueIfFalse ;
//example
let weather = "sunny";
let attire = weather ? "vest" : "jacket";
console.log(attire);

// 6. Switch statement -used to check multiple specific values
// // break prevents fall-through...if theres no break it will give both the actual expected output and the default
//syntax
// switch(expression){
//     case value1:
//         blockcode
//         break;
//     case value1:
//         blockcode
//         break;
//     case value1:
//         blockcode
//         break;
//     default:
//         blockcode - runs when there's no match 
// };
//example
let day = 3;
switch(day){
    case 1:
        console.log("Monday")
        break;
     case 2:
        console.log("Tuesday")
        break;
     case 3:
        console.log("Wednesday")
        break;
    default:
        console.log("Other Day")    
}
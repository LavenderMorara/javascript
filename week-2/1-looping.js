//Loop - a block of code that repeats code multiple times till a set condition is met.
//1. For loop  - repeats code a known number of times.
//syntax
// for(let i=1; -sets the current value of the variable
//     1<=5; - sets the Range; min and max value of the loop
//     i++){ - sets the increment; if you want it to increase by more than 1; i+=2/i--/i-=3 etc
//     console.log(i);
// };
//example
function forLoop1(){
for(n=1; n<=20; n++){
    if(n%5===0){
    console.log(n);
    }
};
};
// forLoop1();

function forLoop2(){
    for(let num = 1; num<= 10; num+=1){
        if(num%2!==0){
            console.log(num)
        }
    }
}
// forLoop2();

//2.While loop - repeats a code as long as a condition is true; we dont know the number of times.
//syntax
// while(condition){
//     block_code
// };
// let num = 1;-the value of the vat\riable is assigned out of the loop
// while (num<=5){- here we set the range
//     console.log(num);
//     num++; - increment apppears under code_block
// };
function whileLoop(){
    let num = 20;
    while(num>=2){//if theres a decrement focus on where you want the loop to end so that we don't create an infinite loop eg by doing num<=20
        console.log(num)
        num-=2;
    }

};
// whileLoop();
function whileLoop2(){
    let num = 1;
    while(num<=15){
        if(num%3===0){
            console.log(num)
        }
        num+=1;
    }
};
// whileLoop2();

//3.do...while loop - runs the code once then checks the condition then will continue running it provided condition is true...if its not it'll stop on the first iteration.
//syntax
// do{
//     code_block
// }while(condition)

// let num = 1;- actual value of variable is defined outside the loop
// do{
//     console.log(num);-output is defined under the do part
//     num++; - increment is defined under the do part of the loop
// } while(num<= 5);- range is defined under while
function doWhileLoop(){
    let num = 5;
    do{
        if(num%2 === 0 ){
            console.log(num);
        }
        num-=1;
    }while(num>=0);
}
// doWhileLoop();

///Break and continue 
//1.break - breaks and exits the loop immediately  no matter the remaining iterations
//usually introduced to any loop using if, under the condition eg if(condition){break;}
//syntax
// if(condition){
//     break;
// }
///example
function breakingLoops(){
    for(n=1; n<=10; n+=1){
        if(n===7){
            break;
        }
        console.log(n);
    }
}
//breakingLoops();

//2.continue - used to skip the current iteration; introducrd using if, under the condition 
//syntax
// if(condition){
//     continue;
// }
//example
function continueFor(){
    for(num=1; num<=10; num+=1){
        if(num%2===0){
            continue;
        }
        console.log(num);
    }
}
// continueFor();

function continueWhile(){
    let num = 1;
    while(num<=10){
        if(num%2===0){
            num+=1;//- in while loops be sure to increment before skipping; same applies for do..while loops
            continue;
        }
        console.log(num);
        num+=1;
    }
}
// continueWhile();
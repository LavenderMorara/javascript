let stringToNUm = Number("123");
console.log(`${stringToNUm} is a ${typeof stringToNUm}`);
let floatToNum = parseFloat("12.7");
console.log(`${floatToNum} is a ${typeof floatToNum}`);
let boolToNum = parseInt(true);
console.log(`${boolToNum} is a ${typeof boolToNum}`);
let boolToString = (true).toString();
console.log(`${boolToString} is a ${typeof boolToString}`);
let numToString = String(124)
console.log(`${numToString} is a ${typeof numToString}`);

function breakingWhileLoop(){
    let num = 1;
    while(num<=10){
        if(num === 7){
            break;
        }
        console.log(num);
        num+=1;
    }
}
// breakingWhileLoop();

function breakingDoWhile(){
    let num = 1;
    do{
        if(num===7){
            break;
        }
        console.log(num);
        num+=1;
    }while(num<=10);
}
// breakingDoWhile();

function continueWhile(){
    let num = 1;
    while(num<=10){
        if(num%2===0){
            num+=1;
            continue;
        }
        console.log(num);
        num+=1;
    }
}
// continueWhile();

function continueDoWhile(){
    let num = 1;
    do{
        if(num%2 === 0){
            num+=1;
            continue;
        }
        console.log(num);
        num+=1;
    }while(num<=10)

}
// continueDoWhile();
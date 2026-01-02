///1.String concatination - this is joining of strings
//1.Using +
//synatx
// let var1 = val1;
// let var2 = val2;
// let var3 = var1 + "" + var2; - you can space within the quotes if you want the output spaced.

//2. Using +=
//syntax
// let var1 = val1;
// val1 += "string";
//  console.log(var1)//=> val1 string - this will be output 

//3.Using backticks - can be used all times and are benefitial when we intend to embed variables
//example
// let age = 21;
// console.log(`I am ${age} years old`);

//practice
function stringConcatination(){
    let n1 = "Chiya";
    let n2 = "Morara";
    console.log(n1 + " "+ n2);
    n3  = n1 + " " + n2;
    console.log(n3);

    let greeting = "Hello";
    let name = "Chiya";
    console.log(greeting +=" "+ name);///-if you need a space  have spaced quotes + variable
    x = greeting += "  " + name;
    console.log(x);

    let c = "BBIT";
    let y = 2024;
    console.log(`I am studying ${c} in the year ${y}`)
}
// stringConcatination()

///2.String methods
//1.// .length - return the number of characters a string has inclusive of letters, numbers, spaces, symbols
//syntax
// variable.length

//2.// .toUpperCase() - coverts all letters in a string to uppercase; numbers and symbols remain unchanged.
//syntax
// variable.toUppercase();

//3.// .toLowercase() - converts all letters to lowercase
//syntax
//variable.toLowercase();

//4.// .charAt(index) - returns the character in the index passed
//syntax
// variable.charAt(index);

//5.// .includes(substring) - checks if string contains the substring passed; the return values are true or false
//syntax
// variable.includes("substring");

//6.// .indexOf(substring) - returns the index of the first occurrence of the substring ie. if its a word it'll return the index of the first letter
//syntax
//variable.indexOf("substring");

//7.// .startsWith() - checks if the string starts with the substring that is passed.
// syntax
//variable.startsWith("substring");

//8.// .endsWith() - checks if string ends wit the substring that has been passed
//syntax
//variable.endsWith("substring");

//8.// .slice() - extracts part of the srting depending on arg(s) passed and a space is not indexed
//syntax
//1. variable.slice(index) - if argument is one it begins extraction from and inclusive of the given index till the end of the string
//2. variable.slice(index1, index2) - extracts from and iclusive of the first index till and exclusive of the last index

//9.// .substring(arg1, arg2) - extracts part of a string; spaces are included in the indexing
//syntax
//variable.substring(index1, index2) - extracts from and inclusinve of first index till and exclusive of second index.

//10.// .replace(old, new) - replaces first occurrence of the substring with the new string; original string doesn't change
//syntax
//let var1 = "I love JS"
//let var2 = var1.replace("JS", "Python");
//console.log(var2);

//11.// .split(separator) - converts a string into an array of substrings
// syntax
// let var1 = "I love JavaScript";
// let var2 = var1.split(" ") - here we have used a space as the separator so each subtring will be an element provided its separated by a space, if there no spcae each character will be an element of the formed array, you could also use a comma etc provided they exist in string.

//12.// .trim()- removes spaces prom both start and end
//      .trimStart - removes spaces from the start only
//      .trimEnd - removes spaces from the end only
//syntax
// var.trim()
// var.trimStart()
// var.trimEnd()

//13.// .repeat(n) - repeats the string n times; returns a new string
//syntax
//var.repeat(n);

//examples
function stringMethods(){
    let sentence = "I love programming";
    console.log(`The length of the sentence is ${sentence.length}`);

    let city = "Nairobi";
    console.log(city.toUpperCase());

    let country = "KENYA";
    console.log(country.toLowerCase());

    let name = "Chiya";
    console.log(`first character : ${name.charAt(0)}`);
    console.log(`last character : ${name.charAt(4)}`);

    let greeting = "Good morning, Chiya!";
    console.log(greeting.includes("morning"));

    let word = "JavaScript";
    console.log(word.indexOf("String"));

    let greeting2 = "Good morning, Chiya!";
    console.log(`Starts with Good : ${greeting2.startsWith("Good")}`);
    console.log(`Ends with Chiya! : ${greeting2.endsWith("Chiya!")}`);

    let greeting3 = "Good morning, Chiya!";
    console.log(greeting3.slice(5,12));

    let greeting4 = "Good morning, Chiya!";
    console.log(greeting4.substring(14,19));

    let greeting5 = "Good morning, Chiya!";
    let revGreeting5 = greeting5.replace("morning", "evening");
    console.log(revGreeting5);
    console.log(greeting5.replace("morning", "evening"));

    let fruits = "apple,banana,orange";
    let fruitArr = fruits.split(",");
    console.log(fruitArr);
    console.log(fruits.split(","));

    let names = "   Chiya Morara   ";
    console.log(names.trim());
    console.log(names.trimStart());
    console.log(names.trimEnd());

    let emoji = "⭐";
    console.log(emoji.repeat(5));
}
// stringMethods();

///3.String masking - replacing sensitive characters eg passwords with symbols
//Can be done using .repeat() or .slice() or .length
//1.// Complete masking
//syntax 
// let password = val1;
// let masked = "*".repeat(var1.length); - "*" reps the symbol we wanna use to mask the value 

//2.// Partial masking
//syntax
// let password= val1;
// let visible= var1.slice(start, end); - this includes the indices of the charasters we want visible
// let masked = visible + "*".repeat(password.length - n) n=number_of_characters_sliced_under_visible

function stringMasking(){

    let p1 = "secret123";
    let m1 = "*".repeat(p1.length)
    console.log(m1)

    let p2 = "mypassword";
    let v = p2.slice(0,3);
    // let v2 = p2.slice(8) - leaves the last 2 characters visible
    let m2 = v + "*".repeat(p2.length - 3)//+ v2
    console.log(m2);
}
stringMasking();
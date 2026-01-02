//Non-mutating array methods - alter elemets of an array and return a new array/ value leaving the original arry unaltered
//.slice()- extracts a porion of an array into a new array
//syntax
//arrName.slice(start) - will slice from and in clusive of given index till the end
//arrName.slice(start, end) - will slice from and inclusive of start index till and exclusive of end index
//arrName.slice(negativeIndex) - extracts from the end of the array  with respect to the number passed; if -2 id passed the last 2 will be extracted
//example
let numbers = [10, 20, 30, 40, 50];
let sliceTillEnd = numbers.slice(1);
let slice = numbers.slice(1,3);
let sliceFromEnd = numbers.slice(-3);
// console.log(slice);// - notice how in immutable emthods you console.log the actual variable in stead of the original array
// console.log(sliceTillEnd);
// console.log(sliceFromEnd);


//.concat()- combines two or more arrays or values
//syntax
//arrName.concat(array(s)) - combines given array with the passed array(s) passed
//arrName.concat(array(s), value(s)) - combines given array with the passed array(s) and value(s)
//example
let arr1 = ["red", "green"];
let arr2 = ["blue", "yellow"];
let arr3 = arr1.concat(arr2);
let arr4 = ["pink", "white"];
let arr5 = arr3.concat(arr4, ["grey", "magenta"], "orange", "navy")
// console.log(arr3);
// console.log(arr5);

//.join()- converts an array into a string; a separator can be specified; default separator is comma
//syntax
//arrName.join() - a comma separating the elements in the string output since none is assigned
//arrName.join("")- since it isnt spaced the elements will be printed out as a single word; wit no separator
//arrName.join(" ") - spacces are used to separate the elements in the string output; you could use *, -, /etc as separators within the quotes
//example
let words = ["Hello", "world", "from", "JS"];
let string = words.join(" ");
// console.log(string);

//.indexOf() -  finds the firat index of a specified element; if the element isn;t found -1 is returned
//syntax
//arrName.indexOf(element) - element reps the index whose index we are looking for
//arrname.indexOf(elemet, startIndex) - startIndex reps the index after searching should start; useful if the element appears more than once
//example
let colors = ["red", "green", "blue", "green"];
let firstGreen = colors.indexOf("green");
let secondGreen = colors.indexOf("green",2 )
// console.log(firstGreen);
// console.log(secondGreen);

//.includes() - checks if an element exists in an array and return true/false
//syntax
//arrName.includes(element) - element reps the index we are checking for
//arrName.includes(element, startIndex) - startIndes reps the index after which we want the search to begin; useful if the element appears more than once
//example
let colors2 = ["red", "green", "blue", "purple"];
let checkYellow = colors2.includes("yellow");
let checkRed = colors2.includes("red");
// console.log(checkRed);
// console.log(checkYellow);

//.find()- return first element that matches the given condition ; if none matches it return undefined
//syntax
//arrName.find(callback) - the callback is a function  that tests each element  eg. num=>num>2
//example
let ages = [18, 22, 16, 25, 30];
let find = ages.find(age => age>20);
let find2 = ages.find(age=>age<10);
// console.log(find);
// console.log(find2);

//.findIndex()- returns index of the first lement that matches a given condition; return -1 if none matches
//syntax 
//arrName.findIndex(callback) - callback is a function that tests each element; eg. num=>num<10
//example
let ages2 = [18, 22, 16, 25, 30];
let findIndex = ages.findIndex(num=>num>20);
let findIndex2 = ages.findIndex(num=>num<10);
// console.log(findIndex);
// console.log(findIndex2);

//.every() - checks if all elements of an array satisfy a given condition ; return true if they do and false if they don't
//syntax
//arrName.every(callbback) - callback is a function that tests each element; eg. num=>num<10
//example
let scores = [80, 90, 100, 70];
let every = scores.every(score=>score>=70)
let every2 = scores.every(score => score<50)
// console.log(every);
// console.log(every2);

//.some()- tests whether at least one lement in an array passes a given condition; return true if any element satisfies the condition and false if none satisty the condition
//synatax
//arrName.some(callbback) - callback is a function that tests each element; eg. num=>num<10
//example
let ages3 = [18, 22, 16, 25, 30];
let isNot18 = ages3.some(age=>age<18)
let some = ages3.some(age=>age>30)
// console.log(isNot18);
// console.log(some);

//.toString()- converts array elemnets to a string; in the output elements are automatically separated by a comma; takes no arguments
//syntax
//arrName.toString()
//example
let colors4 = ["red", "green", "blue"];
let string2 = colors4.toString()
// console.log(`${string2} is a ${typeof string2}`);



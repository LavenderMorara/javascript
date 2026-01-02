//Array - a collection of values stored in a variable; can contain values of different types
//syntax
//let/const variable = [value(s)];

//Accessing array elements
// syntax
//arrName[index]
//example
let colors = ["red", "green", "blue"];
// console.log(colors[0])
// console.log(colors[2])

//Updating array elements
//syntax
//arrName[index] = newValue; - changes the initial array
//example
colors[0] = "purple";
// console.log(colors)

//Array Operations - divided into Non-mutating array methods(don't alter the original array and in stead create a new array)
// and Mutating array methods(alter the original array)

//Mutating array methods - aren't advisable for use since they alter the original array
//.push()- addes element(s) to the end of an array.
//syntax
//arrName.push(velue(s))
//example
let numbers = [1, 2, 3];
numbers.push(4, 5)
// console.log(numbers.push(4, 5)) - used to access the last element
// console.log(numbers)

//.pop() - removes last element from an array; takes nor arguments
//syntax
//arrName.pop()
//example
let cities = ["Nairobi", "Mombasa", "Kisumu"];
let removedCity = cities.pop();
// console.log(removedCity); - used to print the removed elemnet
// console.log(cities);

//.unshift() - adds element(s) to the beginning of an array; alters indexes of the of the elements of the array
//syntax
// arrName.unshift(value(s))
//example
let queue = ["Alice", "Bob"];
let added = queue.unshift("Chiya", "Aria");
// console.log(added); //-return length of the new array; number of elements
// console.log(queue);

//.shift()- removes the element at the start of the array; takes no arguments; alters indexes
//syntax
//arrName.shift()
//example
let names = ["Alice", "Bob"];
let removed = names.shift(); 
// console.log(removed) //- prints the removed element
// console.log(names)//- prints the updated array

//.splice() - adds, removes or replaces elements
//syntax
//1. arrName.splice(start, deleteCount) - start reps the index we wanna begin the removal, and deleteCount reps the number of elements we want deleted
//2. arrName.splice(start, deleteCount, element(s)) -when we wanna add elements from a given point we'll indicate the start index then make deleteCount 0  and list the element(s) we wanna add
//3. arrName.splice(start, deletCount, elements(s)) - when we wanna replace elements, have the start to rep the position you wann abegin replacing from, ensire delete count  is equal to number of element(s) for replacing, if not equal we'll eithe add and replace/ remove and replace simultaneously.
//example
let colors2 = ["red", "green", "blue", "yellow"];
// console.log(colors2);
let remove = colors2.splice(1,2)
// console.log(colors2);
let removeAndAdd = colors2.splice(1, 2, "purple");
// console.log(colors2);
let replace = colors2.splice(1, 1, "grey");
// console.log(colors2);
let add = colors2.splice(3, 0, "pink")
// console.log(colors2);

//.sort() - reorders array elements using string unicode order ie. reorders in ascending order either alphabetically or numerically; in numbers it obly considers the first character ie. 10 will appear before 2  since 1 in 10 is smaller than 2 and it puts consideration inunicode order
//syntax
//arrName.sort() - this reorders strings but won't work for numbers unless all elements have one digit
//arrName.sort((a,b)=>a-b) - works for numbers and the arguments have specified ascending order
//arrName.sort((a,b)=>b-a) - reorders numbers in decsending order
//example
let numbers2 = [7, 2, 9, 4, 1];
let ascending = numbers2.sort((a,b)=>a-b);
// console.log(numbers2);
let descending = numbers2.sort((a,b)=>b-a);
// console.log(numbers2);

//.reverse()- reverses the order of elements in place
//syntax
//arrName.reverse() - takes no arguments
//example
let fruits2 = ["apple", "banana", "mango"];
reordered = fruits2.reverse();
// console.log(fruits2)

//.fill()- replaces the elemets of an array with a static value
//syntax
//arrName.fill(value) - replaces the elements of the array with the given element from start to end
//arrname.fill(value, start, end) - replaces elements with the given value from and inclusive of the start index till and exclusive of the end index
//example
let arr = [1, 2, 3, 4, 5];
let filled1 = arr.fill(0, 1, 4);
// console.log(arr);
let filled2 = arr.fill(0);
// console.log(arr);

//.copyWithin() - copies part of an array to another location within the array
//syntax
//arrName.copyWithin(target, start) - target reps  the index we wanna copy to , start reps the index to start copying from and is inclusive of it
//arrName.copyWithin(target, start, end) - end reps the index to stop copying and is exclusive  and optional
//example
let arr2 = [10, 20, 30, 40, 50];
let copyTillEnd = arr2.copyWithin(1, 2);//- 30, 40, 50 are copied to replace feom index 1, the last element remains same since its excluded
// console.log(arr2);
let arr3 = [10, 20, 30, 40, 50];
let copyWithEnd = arr3.copyWithin(1,3,4)//- only 40 is copiedto index 1 since end is excluded in the copying
// console.log(arr3)

//constants - used for immutable arrays; whose values we don't anticipate change; if we expects the constant to be global have its variable capitalised
//syntax
// const ARR_NAME = [value(s)];
//example
const COLORS = ["red", "green", "blue"];
// console.log(COLORS[0]) - 

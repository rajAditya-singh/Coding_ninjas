//ARRAY In JavaScript
// An array is a special variable, which can hold more than one value at a time.
// Array is an object used to store and manage ordered set or collection of values. and these values are known as elements. and these elements can be of any data types i.e. string, number, bollean, objects and even other arrays and functions.

/** In java or c++ or any other language Arrays are homogeneous in nature i.e. they cannot have multiple data types in a single array. */
/** But unlike these language arrays in javascript are heterogeneous as we can store multiple datatypes in a single array. */
// Creating an Array
let myArray = [1, "two", true, null, { name: "John" }, [1, 2, 3], function () { return "Hello"; }];
// console.log(myArray);
// console.log(myArray[5]) //to get element through index 


/** Arrays are Dynamic in JavaScript i.e. As in other languages arrays has fixed size and cannot be change after decleration but in javascript we have methods to change length of an arrays that makes it dynamic */
// Methods on Arrays

//ADDING Elements to an array
//1. puch() - adds one or more elements to the end of an array and returns the new length of the array.
const teams = ["CSK", "RCB", "MI", "KKR"];
console.log(teams)
const pusharr = teams.push("SRH")
console.log(pusharr)
teams.push("DC", "RR")
console.log(teams)

//2. Unshift() -  add elements at the beginning of the Array
const unshiftarr = teams.unshift("LSG")
console.log(unshiftarr)
/** Push() and unshift() returns the new length of an array */

// REMOVING Elements from an array
//1.pop()-  removes element form the end of and array
const poparr = teams.pop()
console.log(poparr)
console.log(teams)

//2.shift() - removes element from the starting of an array
const shiftarr = teams.shift()
console.log(teams)
console.log(shiftarr)
/** pop() and shift() returns the removed element */

//------------------------------------------------------

//Other Methods on Arrays
// to get index of an element
const RCBindex = teams.indexOf("RCB")
console.log(RCBindex)
const RRindex = teams.indexOf("RR")
console.log(RRindex)

//  to check if the element is present in the array or not
const isLSGPresent = teams.includes("LSG")
console.log(isLSGPresent)

//slice() - it returns just a copy of the array but does not do any changes in the original array
console.log(teams)
// console.log(teams.slice(2)) // it just removes the removes the array of before the given index and gives the rest of array
console.log(teams.slice(1, 3)) // it gives array from start index to end index-1
console.log(teams) // no changes in original array

// splice() -  it take 3 arguments starts with index, then the number of elemnts to be removed and then the elments to be added
console.log(teams)
teams.splice(3, 1, "GT") //at index of 3 element will be removed and GT will be added at that place 
console.log(teams)
teams.splice(4, 2, "NA")
console.log(teams)

//concat() -  it is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const team2 = ["India", "Australia", "England"]
const mergedTeams = teams.concat(team2)
console.log(mergedTeams)
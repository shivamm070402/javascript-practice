Variables (var, let, const)
Declare a variable name using var and print it.
Declare a variable age using let and update its value.
Declare a constant PI and print it.
Create three variables using var, let, and const.
Swap two variables using a temporary variable.
Swap two variables without a temporary variable.
Create a variable and check its type using typeof.
Declare multiple variables in one line.
Store your name, age, and city in separate variables.
Print all variables in a single console.log().
🟢 Primitive Data Types
String
Create a string and print its length.
Print the first character of a string.
Print the last character of a string.
Convert a string to uppercase.
Convert a string to lowercase.
Concatenate two strings.
Use template literals to display:
My name is John and I am 20 years old.
Reverse a string.
Check whether a string contains a word.
Count vowels in a string.
Number
Add two numbers.
Find the largest of two numbers.
Find the largest of three numbers.
Calculate square of a number.
Calculate cube of a number.
Check whether a number is even or odd.
Calculate factorial of a number.
Generate multiplication table of a number.
Check whether a number is prime.
Find sum of digits of a number.
Boolean
Create a boolean variable and print it.
Compare two numbers using >.
Compare two strings.
Check if a number is positive.
Check if a user is eligible to vote.
Undefined & Null
Create an undefined variable.
Create a null variable.
Check types of undefined and null.
Compare null == undefined.
Compare null === undefined.
BigInt
Create a BigInt number.
Add two BigInt numbers.
Compare Number and BigInt.
Symbol
Create two symbols with same description.
Compare two symbols.
Create an object with Symbol key.
🟡 Intermediate Level
Primitive vs Reference
Copy a primitive variable and modify the copied value.
Copy an object and modify a property.
Copy an array and modify an element.
Demonstrate pass-by-value.
Demonstrate pass-by-reference.
Objects
Create a student object.
Add a new property.
Delete a property.
Update a property.
Count number of properties.
Loop through object keys.
Convert object to array.
Merge two objects.
Clone an object.
Arrays
Create an array of 5 numbers.
Find array length.
Add element at end.
Add element at beginning.
Remove last element.
Remove first element.
Reverse an array.
Sort an array.
Find maximum element.
Find minimum element.
🔴 Advanced Level
Variable Scope
Demonstrate function scope using var.
Demonstrate block scope using let.
Demonstrate block scope using const.
Access variable before declaration using var.
Access variable before declaration using let.
Demonstrate Temporal Dead Zone.
Hoisting
Predict output:
console.log(a);
var a = 10;
Predict output:
console.log(b);
let b = 20;
Predict output:
console.log(c);
const c = 30;
Hoist a function declaration.
Hoist a function expression.
Type Conversion
Convert string to number.
Convert number to string.
Convert boolean to string.
Convert string to boolean.
Use Number().
Use String().
Use Boolean().
Interview Coding Questions
What is the output?
let x = 10;
let y = x;
y = 20;
console.log(x);
What is the output?
let obj1 = {age:20};
let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);
What is the output?
var a = 5;

function test(){
   console.log(a);
   var a = 10;
}

test();
What is the output?
let a = 10;

{
   let a = 20;
   console.log(a);
}

console.log(a);
What is the output?
const arr = [1,2,3];
arr.push(4);

console.log(arr);
Clone an object without affecting the original object.
Clone an array without affecting the original array.
Create your own implementation of typeof.
Detect all primitive data types.
Create a function that returns type of any value.
Create a variable tracker that logs type changes.
Build a mini program demonstrating all 7 primitive types and 4 reference types.

These 100 coding questions are enough to master Variables, Scope, Hoisting, Primitive Types, Reference Types, and Type Conversion before moving to Functions and DOM.
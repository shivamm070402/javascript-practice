//without temp
let a = 10;
let b = 20;
console.log("before swapping: ");
console.log("a =", a, "b =", b);

// Swapping without using a temporary variable
[a, b] = [b, a];
console.log("After swapping without using temporary variable: ");
console.log("a =", a, "b =", b);
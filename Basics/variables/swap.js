let a = 10;
let b = 20;

// Swapping using a temporary variable
console.log("before swapping: ");
console.log("a =", a, "b =", b);

// Using a temporary variable
let temp = a;
a = b;
b = temp;
console.log("After swapping using temporary variable: ");
console.log("a =", a, "b =", b);
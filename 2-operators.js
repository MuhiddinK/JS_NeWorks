// Arithmetic
console.log(3+5*4-6);

// Assignment
var x = 5;
x+=5;
console.log(x);

// Comparison
var one = 1;
var one_again = 1;
var one_string = '1';

console.log(one == one_again); // true
console.log(one === one_again); // true
console.log(one == one_string); // true => checks the same value rgardles of the types
console.log(one === one_string); // false => checks also the types

// Logical (and= &&; or= ||; not= !)
console.log((5<2) && (2>=3));
console.log((5<2) || (2>=3));
console.log(!(5==2));

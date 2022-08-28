/*Factorial number
  Factorial Formula n!= n x (n-1) x (n-2)..x 1
  
  Factorial of Zero(0!) = 1;
  This still counts as a way of arranging it, so by definition, a zero factorial is equal to one,
  just as 1! is equal to one because there is only a single possible arrangement of this data set.
  Factorial of One(1!) =  1;
  Factorial of Two(2!) = 2 x 1 = 2;
  Factorial of Three(3!) = 3 x 2 x 1 = 6; */
"use strict";

let yourNumber = Number(prompt("Enter Your Number"));

let total = 1;
for(let i = 1;i <= yourNumber;i++){
    total = total * i;
}

alert("Factorial of " + yourNumber + " is " + total);
"use strict";
// prime number are 2,3,5,7,11

let userData = Number(prompt("Enter Your Number"));

let prime = true;

if (userData < 2) {
  prime = false;
}
//Prime number are can't be remained zero  when it devided by other number

for (let i = 2; i < userData; i++) {
  if (userData % i == 0) {
    prime = false;
    break;
  } else {
    prime = true;
  }
}

if (prime) {
  alert("This is prime number");
} else {
  alert("This is not prime number");
}

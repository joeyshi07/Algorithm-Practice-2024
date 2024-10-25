/* function factorial(n) {
  if (n < 1) {
    return; // guard clause
  }
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
console.log(factorial(3));
console.log(factorial(5));

//occupy parking alg

function checkSpaces(n, dayOne, dayTwo) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (dayOne[i] === "C" && dayTwo[i] === 'C"') {
      count++;
    }
  }
  return count;
/* */

//strings --> bits and bytes - values btwn 0 and 255 -- bits either 0 or 1
//in binary
// from 2^0 to 2^7 all 1s --> add to 255
// hexadecimal in base 16 0 to f --> larger range
function binaryToDecimal(n) {
  let decimal = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[n.length - 1 - i] === "1") {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}
console.log(binaryToDecimal("101"));
console.log(binaryToDecimal("11101"));

function decimalToBinary(n) {
  let binary = "";
  let i = 0;
  while (i <= 7) {
    if (n >= 2 ** (7 - i)) {
      binary += "1";
      n -= 2 ** (7 - i);
    } else {
      binary += "0";
    }
    i += 1;
  }
  return binary;
}
console.log(decimalToBinary(5));
console.log(decimalToBinary(123));


//if larger than 128, subtract 2^7 and append 1. do the same with the rest of the powers of 2 until 2^0, where if the number is larger than the valuye of the power, you subtract it from the number and append 1 and if not append 0 and skip to the next digit.
// for the first index, if it equals 1, append 2^7 otherwise skip to the next. iteratre through the whole thing, subtracting one from the power each time. if it equals 1, add it on to the previous appended until everything gets run through.

function decToBinary(dec) {
  let binary ="";
  while (dec > 0) {
    let remainder = dec % 2;
    binary = remainder + binary;
    dec = Math.floor(dec/2);
  }
  return binary
}
console.log(decToBinary(5));
console.log(decToBinary(123)));
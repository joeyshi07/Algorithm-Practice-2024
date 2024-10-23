function factorial(n) {
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
}
console.log(checkSpaces(5, "CC..C", ".CC.C"));

//strings --> bits and bytes - values btwn 0 and 255 -- bits either 0 or 1
//in binary
// from 2^0 to 2^7 all 1s --> add to 255
// hexadecimal in base 16 0 to f --> larger range

//if larger than 128, subtract 2^7 and append 1. do the same with the rest of the powers of 2 until 2^0, where if the number is larger than the valuye of the power, you subtract it from the number and append 1 and if not append 0 and skip to the next digit.
// for the first index, if it equals 1, append 2^7 otherwise skip to the next. iteratre through the whole thing, subtracting one from the power each time. if it equals 1, add it on to the previous appended until everything gets run through.

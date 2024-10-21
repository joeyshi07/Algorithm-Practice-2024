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

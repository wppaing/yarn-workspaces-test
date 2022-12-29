//using for loop
function sumTo(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

//using recursion
function sumToRecurse(n) {
  return n === 1 ? n : n + sumToRecurse(n - 1);
}

//using formula
function sumToFormula(n) {
  return (n * (n + 1)) / 2;
  return ((n + 1) / 2) * n;
}

console.log(sumToFormula(5000000000));

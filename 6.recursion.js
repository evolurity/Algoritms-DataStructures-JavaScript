const factorial = n => n == 1 ? n : factorial(n - 1) * n
console.log(factorial(5));

const fibonachi = n => (n === 1 || n === 2) ? 1 : fibonachi(n - 1) + fibonachi(n - 2)
console.log(fibonachi(5));
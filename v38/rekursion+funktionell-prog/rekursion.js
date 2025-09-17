function countDown(num) {
  console.log(num);

  // base case (när vi ska sluta loopa)
  if (num == 0) {
    return;
  }

  // loop case - kalla på sin egen funktion med en ny variabel
  countDown(num - 1);
}

// countDown(10);

// Istället för for-loop
const numbers = [1, 2, 3, 4];

function sumArray(arr) {
  // base case
  if (arr.length == 0) {
    return 0;
  }

  // rekursive case
  const first = arr[0];
  const restOfArray = arr.slice(1);
  return first + sumArray(restOfArray);
}

console.log(sumArray(numbers));

// Fakultet
// 5 fakultet = 1 * 2 * 3 * 4 * 5 = 120;

function factorial(n) {
  // base case
  if (n == 0) {
    return 1;
  }

  // Rekursive case
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Fibonacci
// 1 2 3 5 8 13

function fibonacci(n) {
  // base case
  if (n <= 1) {
    return n;
  }
  // rekursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//console.log(fibonacci(10));

// Palindromkoll

// "ebbe" - längd 4
// "bb" - längd 2
// "" - längd 0

function isPalindrome(str) {
  // base case true
  if (str.length <= 1) {
    return true;
  }

  //base case false
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // rekursivt fall
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("ebwje"));

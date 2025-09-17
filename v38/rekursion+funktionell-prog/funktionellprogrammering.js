// Regler för funktionell programmering.
// Skriva kod som inte har side effects. (pure functions)
// Inte mutera arrayer istället kopiera
// kejdja ihop funktions-anrop så att input till output blir tydligt och konsekvent.

let counter = 0;

function addOneWithSideEffect() {
  counter++;
  return counter;
}

function pureAddOne(num) {
  return num++;
}

//Currying - dela upp parametrar i separata funktioner

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

function regularMultiply(a, b) {
  return a * b;
}

const double = multiply(2);

const result = double(10);

const result2 = regularMultiply(2, 10);

const result3 = multiply(2)(10);

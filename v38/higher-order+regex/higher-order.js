//Reduce
const numbers = [1, 5, 10];

// console.log(numbers.reduce((acc, curr) => acc + curr, 0));
// console.log(numbers.reduce((acc, curr) => acc * curr, 1));

//some
// Om ett element i arrayen uppfyller kravet så ger den true

const result = numbers.some((num) => num > 4);
console.log(result);

//every
// All element måste uppfylla kravet för att det ska bli true
const result2 = numbers.every((num) => num > 0);
console.log(result2);

//find
// returnerar första elementet som uppfyller kravet.
const result3 = numbers.find((num) => num > 4);
console.log(result3);

//chaining med higher order functions:
//lägg ihop resultaten med .

const persons = [
  { name: "Sven", age: 50 },
  { name: "Mona", age: 30 },
  { name: "Dan", age: 40 },
];

// utan chaining
const ages = persons.map((person) => person.age); // [50, 40, 30]
const total = ages.reduce((acc, curr) => acc + curr, 0);

console.log("total", total);

// med chaining
const total2 = persons
  .map((person) => person.age)
  .reduce((acc, curr) => acc + curr, 0);

// sort
// sorterar en array. Tar en funktion som har två input returnerar -,+ eller 0

const personsSorted = persons.sort((personA, personB) => {
  return personB.age - personA.age;
});

console.log(personsSorted);

// chaining with sort
const ages2 = persons.map((person) => person.age).sort((a, b) => b - a);
console.log(ages2);

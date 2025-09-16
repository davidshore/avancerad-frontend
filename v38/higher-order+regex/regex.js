// Funktioner för regex
const str = "hej världen, hej igen";

// test - ger true/false

const result = /hej/.test(str);
console.log(result);

// match - hämtar matchande text
const result2 = str.match(/hej/g);
console.log(result2);

// replace - ersätter träffar
const result3 = str.replace(/hej/g, "HEJ");
console.log(result3);

// FLAGGOR
// flaggan i ger case insensitive
// flaggan g ger matching på flera ställen
const text = "hej hej hej";

const result4 = /HEJ/i.test(text);
console.log(result4);

// Character classes - en grupp av tecken som man vill matcha med.
// Tex gruppen alla nummer. \d

const result5 = "jag har 123 äpplen".match(/\d/);
console.log(result5);

const result6 = "jag har 123 äpplen 87".match(/\d+/g);
console.log(result6);

// \s - all whitespace
// \w - word characters (bokstäver, siffror, _)

// skapa egna Character classes
// [a-z]
const result7 = "jag har 123 äpplen 87".match(/[a-ö]+/g);
console.log(result7);

// Anchors (^ och $)

// Hitta ett email.
//const str2 = "asuiwebl hej@chas.se aerngoergneiorgn"

// ^
const result8 = /^Hej/.test("Hej på dig");
console.log(result8);

const result9 = /^Hej/.test("Hallå, Hej på dig");
console.log(result9);

// $
const result10 = /dig$/.test("Hallå, Hej på dig");
console.log(result10);

const result11 = /dig$/.test("Hallå, Hej på dig du");
console.log(result11);

const result12 = /^Hallå, Hej på dig du$/.test("Hallå, Hej på dig du");
console.log(result12);

//Validera email.
const email = "hej@chas.se";

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

const result13 = emailPattern.test(email);

console.log(result13);

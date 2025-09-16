# Avancerad JS - Filter & Sök

I denna workshop repeterar och fördjupar ni **JavaScript** med fyra fokusområden:

1. **Higher-order functions** (some, every, find, reduce, sort)
2. **Regex**
3. **Rekursion**
4. **Functional programming** (pure functions & currying)

> **Tid:** ~3–5 timmar (kan delas i två pass)  
> **Mål:** praktiskt använda moderna JS-mönster i små, tydliga övningar – och bygga en mini-app i slutet.

---

## Steg 1 – Skapa projektet

Skapa en mapp `advanced-js` och öppna i VS Code.

```bash
npm init -y
```

Lägg till scripts i `package.json`:

```json
{
  "name": "af01-advanced-js",
  "version": "1.0.0",
  "scripts": {
    "dev": "npx serve -l 5173",
    "start": "npx serve -l 5173"
  }
}
```

Skapa filstrukturen:

```bash
mkdir src
```

Skapa `index.html`, `styles.css`, `src/main.js`.

---

## Steg 2 – HTML & CSS-skelett

`index.html`:

```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8" />
    <title>Avancerad JS - Filter & sök</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <header>
      <h1>Avancerad JS - Filter & sök</h1>
      <p class="muted">HOFs • Regex • Rekursion • FP</p>
    </header>

    <main class="grid">
      <section>
        <h2>Övningar</h2>
        <button id="run-tests">Kör övningstester i konsolen</button>
        <pre id="output" class="box"></pre>
      </section>

      <section>
        <h2>Mini-app: Filter & Sök</h2>
        <div class="controls">
          <input id="search" type="search" placeholder="Sök (regex stöds)" />
          <select id="sort">
            <option value="name-asc">Namn ↑</option>
            <option value="name-desc">Namn ↓</option>
            <option value="price-asc">Pris ↑</option>
            <option value="price-desc">Pris ↓</option>
          </select>
          <label><input id="in-stock" type="checkbox" /> Endast i lager</label>
        </div>
        <section id="list" class="list"></section>
      </section>
    </main>

    <script type="module" src="./src/main.js"></script>
  </body>
</html>
```

`styles.css`:

```css
body {
  font-family: system-ui, sans-serif;
  margin: 2rem;
}
.muted {
  opacity: 0.7;
}
.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;
  align-items: start;
}
.controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
.box {
  background: #f6f6f6;
  padding: 1rem;
  border-radius: 8px;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}
.card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 0.75rem;
  background: #fff;
}
.badge {
  font-size: 0.8rem;
  opacity: 0.7;
}
```

---

## Steg 3 – Data & testhjälp

`src/main.js` (skelett med TODO):

```js
// ====== Data ======
const products = Object.freeze([
  {
    id: 1,
    name: "Chas Hoodie",
    price: 499,
    inStock: true,
    tags: ["clothes", "hoodie"],
  },
  {
    id: 2,
    name: "TS Handbook",
    price: 299,
    inStock: false,
    tags: ["book", "typescript"],
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 129,
    inStock: true,
    tags: ["kitchen", "mug"],
  },
  {
    id: 4,
    name: "Sticker Pack",
    price: 59,
    inStock: true,
    tags: ["swag", "stickers"],
  },
  {
    id: 5,
    name: "JS Handbook",
    price: 279,
    inStock: false,
    tags: ["book", "javascript"],
  },
]);

const $ = (sel) => document.querySelector(sel);
const out = $("#output");

// ====== Steg 4: Higher-order functions ======
export function hasOutOfStock(items) {
  // TODO
}
export function allAffordable(items, max) {
  // TODO
}
export function findByTag(items, tag) {
  // TODO
}
export function totalPrice(items) {
  // TODO
}
export function sortByName(items, direction = "asc") {
  // TODO
}

// ====== Steg 5: Regex ======
export function extractHashtags(text) {
  // TODO
}
export function isValidSwedishZip(code) {
  // TODO
}
export function maskEmails(text) {
  // TODO
}

// ====== Steg 6: Rekursion ======
export function deepCountTags(items) {
  // TODO
}
export function factorial(n) {
  // TODO
}
export function findByIdRecursive(items, id) {
  // TODO
}

// ====== Steg 7: Functional programming ======
export function setInStock(items, id, value) {
  // TODO
}
export function curry(fn) {
  // TODO
}
export const priceAtMost = (max) => (item) => item.price <= max;

// ====== Test-runner ======
function runExerciseTests() {
  try {
    console.clear();
    console.log("== HOFs ==");
    console.log("hasOutOfStock:", hasOutOfStock(products));
    console.log("allAffordable(500):", allAffordable(products, 500));
    console.log("findByTag('book'):", findByTag(products, "book"));
    console.log("totalPrice:", totalPrice(products));
    console.log(
      "sortByName desc:",
      sortByName(products, "desc").map((p) => p.name)
    );

    console.log("\n== Regex ==");
    console.log(
      "extractHashtags:",
      extractHashtags("Idag #frontend #Chas! #100DaysOfCode")
    );
    console.log(
      "isValidSwedishZip:",
      ["12345", "123 45", "12 345"].map(isValidSwedishZip)
    );
    console.log(
      "maskEmails:",
      maskEmails("Kontakta: user@example.com, test.person@chas.se")
    );

    console.log("\n== Rekursion ==");
    console.log("deepCountTags:", deepCountTags(products));
    console.log("factorial(5):", factorial(5));
    console.log("findByIdRecursive(3):", findByIdRecursive(products, 3));

    console.log("\n== FP ==");
    console.log(
      "setInStock id=2 true:",
      setInStock(products, 2, true).find((p) => p.id === 2)
    );
    const cheap = products.filter(priceAtMost(200));
    console.log(
      "priceAtMost(200):",
      cheap.map((p) => p.name)
    );
    const add = (a, b) => a + b;
    const cAdd = curry(add);
    console.log("curry(add)(2)(3):", cAdd(2)(3));

    out.textContent = "Se konsolen för resultat ✅";
  } catch (err) {
    console.error(err);
    out.textContent = "Fel i testerna. Se konsolen ❌";
  }
}
$("#run-tests").addEventListener("click", runExerciseTests);

// ====== Mini-app: Filter & Sök ======
const list = $("#list");
const search = $("#search");
const sortSel = $("#sort");
const inStockOnly = $("#in-stock");

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render(items) {
  list.innerHTML = items
    .map(
      (p) => `
    <article class="card">
      <h3>${escapeHtml(p.name)}</h3>
      <p><strong>${p.price} kr</strong> <span class="badge">${
        p.inStock ? "I lager" : "Slut"
      }</span></p>
      <p class="muted">${p.tags.map((t) => `#${escapeHtml(t)}`).join(" ")}</p>
    </article>
  `
    )
    .join("");
}

function applyFilters() {
  const q = search.value.trim();
  const dir = sortSel.value;
  const stock = inStockOnly.checked;

  let re = null;
  if (q !== "") {
    try {
      re = new RegExp(q, "i");
    } catch {
      re = null;
    }
  }

  const filtered = products
    .filter((p) => (stock ? p.inStock : true))
    .filter((p) => !re || re.test(p.name) || p.tags.some((t) => re.test(t)));

  const sorted = sortByName(filtered, dir.includes("desc") ? "desc" : "asc");
  render(sorted);
}
search.addEventListener("input", applyFilters);
sortSel.addEventListener("change", applyFilters);
inStockOnly.addEventListener("change", applyFilters);
render(products);
```

---

## Steg 4 – Higher-order functions

Implementera funktionerna med:

- `some`
- `every`
- `find`
- `reduce`
- `sort` (kopiera arrayen först, mutera ej original)

---

## Steg 5 – Regex

Implementera funktioner som:

- Hittar hashtags i en text
- Validerar svenska postnummer (`12345` eller `123 45`)
- Maskerar mejl (`u***@domain.com`)

---

## Steg 6 – Rekursion

Implementera:

- `deepCountTags` – räkna alla taggar rekursivt
- `factorial(n)` – basfall + rekursivt fall
- `findByIdRecursive` – hitta objekt med id rekursivt

---

## Steg 7 – Functional Programming

Implementera:

- `setInStock` – pure function som returnerar ny array
- `curry` – enkel currying

---

## Steg 8 – Mini-app

Använd funktionerna för att:

- Filtrera produkter med regex
- Sortera efter namn
- Visa endast i lager

---

## Steg 9 – Extra-utmaningar

- Sortera även på pris
- Bygg UI för regex-flaggor
- Implementera `flattenDeep` rekursivt
- Skriv en enkel `compose(...fns)`

---

## Steg 10 – Success ✅

När du är klar kan du:

- Använda **some/every/find/reduce/sort**
- Skriva och använda **regex**
- Lösa problem med **rekursion**
- Skriva **pure functions** och **currying**
- Bygga en liten **frontend-app** som använder allt ovan

---

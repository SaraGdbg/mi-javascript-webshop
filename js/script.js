console.log("this works!");
/**
 *  TEKOPPAR
 */
const teacups = [
  {
    name: "kristall",
    price: 249,
    category: "med öra",
    rating: 3,
  },
  {
    name: "havsbris",
    price: 349,
    category: "med öra",
    rating: 5,
  },
  {
    name: "retro",
    price: 179,
    category: "med öra",
    rating: 4.5,
  },
  {
    name: "flamma",
    price: 179,
    category: "med fat",
    rating: 3,
  },
  {
    name: "surprise",
    price: 179,
    category: "med öra",
    rating: 3,
  },
  {
    name: "mjau",
    price: 179,
    category: "med öra",
    rating: 5,
  },
  {
    name: "mormor",
    price: 195,
    category: "med fat",
    rating: 3,
  },
  {
    name: "sandstrand",
    price: 349,
    category: "utan öra",
    rating: 4.5,
  },
  {
    name: "glasklar",
    price: 129,
    category: "med öra",
    rating: 4,
  },
  {
    name: "fiskben",
    price: 349,
    category: "med öra",
    rating: 4.5,
  },
  {
    name: "naturlig",
    price: 99,
    category: "utan öra",
    rating: 5,
  },
  {
    name: "hjärtat",
    price: 179,
    category: "med öra",
    rating: 4,
  },
  {
    name: "stilren",
    price: 249,
    category: "med öra",
    rating: 3.5,
  },
  {
    name: "berså",
    price: 249,
    category: "med fat",
    rating: 4,
  },
  {
    name: "namaste",
    price: 299,
    category: "med öra",
    rating: 5,
  },
  {
    name: "kornblå",
    price: 249,
    category: "med fat",
    rating: 4.5,
  },
];
console.log(teacups);
/**
 *  PLUS-/MINUSKNAPPAR
 */
const minus = document.querySelector("#subtract");
const plus = document.querySelector("#add");
const currentCount = document.querySelector("#currentCount");

minus.addEventListener("click", subtraction);

function subtraction() {
  currentCount.value -= 1;
}

plus.addEventListener("click", addition);

function addition() {
  currentCount.value = Number(currentCount.value) + 1;
}

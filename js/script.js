console.log("this works!");
/**
 *  TEKOPPAR
 */

const teacups = [
  {
    name: "Kristall",
    price: 249,
    category: "med öra",
    rating: 3,
    amount: 0,
    img: {
      src: "assets/imgs/1KRISTALLpexels-ahmed-aqtai-2013749.jpg",
      alt: "Genomskinlig kopp av glas med fasat mönster längst ner, fylld med te.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Havsbris",
    price: 349,
    category: "med öra",
    rating: 5,
    amount: 0,
    img: {
      src: "assets/imgs/2HAVSBRISpexels-alteredsnaps-11795940.jpg",
      alt: "En blågrön handdjord keramikmugg fylld med vit dryck",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Retro",
    price: 179,
    category: "med öra",
    rating: 4.5,
    amount: 0,
    img: {
      src: "assets/imgs/3RETROpexels-ann-buht-762092.jpg",
      alt: "En röd emajlkopp med stora vita prickar som har ånga som stiger upp ur den.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Flamma",
    price: 179,
    category: "med fat",
    rating: 3,
    amount: 0,
    img: {
      src: "assets/imgs/4FLAMMApexels-archie-binamira-1187317.jpg",
      alt: "En röd högblank kopp på ett rött högblankt fat.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Surprise",
    price: 179,
    category: "med öra",
    rating: 3,
    amount: 0,
    img: {
      src: "assets/imgs/5SURPRISEpexels-dagmara-dombrovska-18509005.jpg",
      alt: "En vit kopp med guldkant och texten Let life surprise you tryckt i guld.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Mjau",
    price: 179,
    category: "med öra",
    rating: 5,
    amount: 0,
    img: {
      src: "assets/imgs/6MJAUpexels-dagmara-dombrovska-18620397.jpg",
      alt: "En vit kopp med ett kattansikte tryckt på framsidan. Koppens öra är en kattsvans.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Mormor",
    price: 195,
    category: "med fat",
    rating: 3,
    amount: 0,
    img: {
      src: "assets/imgs/7MORMORpexels-gülşah-aydoğan-19040177.jpg",
      alt: "En gammaldags vit kopp med guldkant på ett fat med guldkant. Koppen är fylld med ett rött te.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Sandstrand",
    price: 349,
    category: "utan öra",
    rating: 4.5,
    amount: 0,
    img: {
      src: "assets/imgs/8SANDSTRANDpexels-john-diez-7578231.jpg",
      alt: "En handgjord sandfärgad kopp utan öra. Snöret till en tepåse hänger ut över kanten.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Glasklar",
    price: 129,
    category: "med öra",
    rating: 4,
    amount: 0,
    img: {
      src: "assets/imgs/9GLASKLARpexels-julia-sakelli-905485 (1).jpg",
      alt: "En mindre kopp i klart glas, fylld med rykande te.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Fiskben",
    price: 349,
    category: "med öra",
    rating: 4.5,
    amount: 0,
    img: {
      src: "assets/imgs/10FISKBENpexels-karolina-grabowska-4466255.jpg",
      alt: "En handgjord kopp med ett vertikalt fiskbensmönster i beige och vitt.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Naturlig",
    price: 99,
    category: "utan öra",
    rating: 5,
    amount: 0,
    img: {
      src: "assets/imgs/11NATURLIGpexels-vie-studio-8148643.jpg",
      alt: "En brun pappersmugg utan lock.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Hjärtat",
    price: 179,
    category: "med öra",
    rating: 4,
    amount: 0,
    img: {
      src: "assets/imgs/12HJÄRTATpexels-lisa-fotios-228184.jpg",
      alt: "En vaniljgul kopp med en brun kontur av ett stort hjärta på framsidan.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Stilren",
    price: 249,
    category: "med öra",
    rating: 3.5,
    amount: 0,
    img: {
      src: "assets/imgs/13STILRENpexels-polina-kovaleva-8101157.jpg",
      alt: "En vit slät och högblank kopp utan tryck eller annat.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Berså",
    price: 249,
    category: "med fat",
    rating: 4,
    amount: 0,
    img: {
      src: "assets/imgs/14BERSÅpexels-sena-10240647.jpg/",
      alt: "Ljusgrön mindre kopp med vitt blommönster på tillhörande fat. I koppen flyter en citronskiva i te.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Namaste",
    price: 299,
    category: "med öra",
    rating: 5,
    amount: 0,
    img: {
      src: "assets/imgs/15NAMASTEpexels-teona-swift-6913386.jpg",
      alt: "Ljusgrå kopp med bruna kanter, slät och blank. I teet flyter en vit blomma.",
      width: 500,
      height: 500,
    },
  },
  {
    name: "Kornblå",
    price: 249,
    category: "med fat",
    rating: 4.5,
    amount: 0,
    img: {
      src: "assets/imgs/16KORNBLÅpexels-trina-snow-1033137.jpg",
      alt: "En kornblåp högblank kopp fylld med te med mjölk i , på tillhörande fat.",
      width: 500,
      height: 500,
    },
  },
];

const teacupContainer = document.querySelector("#teacup-container");

for (let i = 0; i < teacups.length; i++) {
  teacupContainer.innerHTML += `<div class="teacups" id="teacup-${i}">
  <h3>${teacups[i].name}</h3>
  <span class="rating">Betyg: ${teacups[i].rating}/5</span>
  <div id="img-conatiner-${i}" class="img-containers">
    <img src="${teacups[i].img.src}" alt="${teacups[i].img.alt}" id="teacup-img-${i} width="500" height="500"/>
  </div>
  <span class="price">Pris: ${teacups[i].price} kr</span>
  <div class="buttons">
    <button class="decrease" id="decreaseBtn-${i}">-</button>
    <span class="amount">${teacups[i].amount}</span>
    <button class="increase" id="increaseBtn-${i}">+</button>
  </div>`;
}
/* Har jag rätt antal </div> ? Ser rätt it i konsollen men här ser det ut att fattas ett? Stängs den översta nivån någonsin? Funkar dock!
/* Lägg till knapp för att lägga varan i kundkorgen! */
/* Koppla ihop valt antal med kundkorgen */

/**
 *  PLUS-/MINUSKNAPPAR TEST
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

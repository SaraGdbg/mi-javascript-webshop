console.log("this works!");
/**
 *  TEACUPS
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
      src: "assets/imgs/14BERSÅpexels-sena-10240647.jpg",
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
      alt: "En kornblå högblank kopp fylld med te med mjölk i , på tillhörande fat.",
      width: 500,
      height: 500,
    },
  },
];

/**
 * PRINT TEACUPS TO WEBSHOP
 * PLUS/MINUS BTNS
 */
//Väljer rätt ställe att skriva ut varorna i
const teacupContainer = document.querySelector("#teacup-container");

// Skriver ut varorna
printProducts();

// Funktion som minskar 1 på vald varas amount efter tryck på minusknappen och sedan skriver ut en uppdaterade varulista där varans amount är uppdaterat
function decreaseAmount(e) {
  let index = e.target.id.replace("decreaseBtn-", "");
  index = Number(index);
  teacups[index].amount -= 1;

  printProducts();
}

// Ökar vald varas amount med 1 vid knapptryckning på plusknappen
function increaseAmount(e) {
  let index = e.target.id.replace("increaseBtn-", "");
  index = Number(index);
  teacups[index].amount += 1;

  printProducts();
}

// Funktionen som skriver ut all information om samtliga varor i min array
function printProducts() {
  teacupContainer.innerHTML = "";

  for (let i = 0; i < teacups.length; i++) {
    teacupContainer.innerHTML += `
    <div class="teacups" id="teacup-${i}">
      <h3>${teacups[i].name}</h3>
      <span class="rating">Betyg: ${teacups[i].rating}/5</span>
      <span class="category">${teacups[i].category}</span>
      <div id="img-conatiner-${i}" class="img-containers">
        <img src="${teacups[i].img.src}" alt="${teacups[i].img.alt}" id="teacup-img-${i} width="2048" height="2048" loading = "lazy"/>
      </div>
      <span class="price">Pris: ${teacups[i].price} kr</span>
      <div class="buttons">
        <button class="decrease" id="decreaseBtn-${i}">-</button>
        <input type="number" class="chosenAmount" value="${teacups[i].amount}">
        <button class="increase" id="increaseBtn-${i}">+</button>
      </div>
      <button class="addToCart" id="addToCart">Lägg till i varukorgen</button>
    </div>`;
  }

  // Väljer ut minusknappen och lägger till en eventlyssnare som svarar på klick och då kör funktionen ovan
  const decreaseButtons = document.querySelectorAll(".decrease");
  decreaseButtons.forEach((btn) => {
    btn.addEventListener("click", decreaseAmount);
  });

  //Väljer ut plusknappen och lägger till en eventlyssnare som svarar på klick och då kör funktionen ovan
  const increaseButtons = document.querySelectorAll(".increase");
  increaseButtons.forEach((btn) => {
    btn.addEventListener("click", increaseAmount);
  });
}

/* Koppla ihop valt antal med kundkorgen */

/**
 * SHOPPING CART HEADER
 */
/*const basketAmount = document.querySelector("#basketSum");

console.log(basketAmount);*/

/* Skriv färdigt här! Summa i varukorgen i headern. Eller antal varor? */

/**
 * SORT PRODUCTS
 */

// Väljer ut var i HTML knapparna ska hamna
const sortTeacups = document.querySelector("#sort");

// Knappar för de olika sorteringarna
sortTeacups.innerHTML += `
  <p id="sortText">Sortera produkter på:</p>
  <div class="sortBtns">
    <button id="sortRatingBtn">Betyg</button> | 
    <button id="sortCategoryBtn">Kategori</button> | 
    <button id="sortNameBtn">Namn</button> | 
    <button id="sortPriceBtn">Pris</button>
  </div>
`;

// SORT BY RATING
// Väljer namnknappen
const sortRatingBtn = document.querySelector("#sortRatingBtn");

// Lyssnar efter klick och kör då
sortRatingBtn.addEventListener("click", sortRating);

// Funktion som sorterar efter betyg, högt -> lågt
function sortRating() {
  teacups.sort((teacup1, teacup2) => {
    return teacup2.rating - teacup1.rating;
  });

  printProducts();
}

// SORT BY CATEGORY
// Väljer kategoriknappen
const sortCategoryBtn = document.querySelector("#sortCategoryBtn");

// Lyssnar efter klick och kör då
sortCategoryBtn.addEventListener("click", sortCategory);

// Funktion som sorterar efter kategori, bokstavsordning
function sortCategory() {
  teacups.sort((teacup1, teacup2) => {
    if (teacup1.category < teacup2.category) {
      return -1;
    }
    if (teacup1.category > teacup2.category) {
      return 1;
    }
    return 0;
  });

  printProducts();
}

//SORT BY NAME
// Väljer namnknappen
const sortNameBtn = document.querySelector("#sortNameBtn");

// Lyssnar efter klick och kör då
sortNameBtn.addEventListener("click", sortName);

// Funktion som sorterar efter namn, bokstavsordning
function sortName() {
  teacups.sort((teacup1, teacup2) => {
    if (teacup1.name < teacup2.name) {
      return -1;
    }
    if (teacup1.name > teacup2.name) {
      return 1;
    }
    return 0;
  });

  printProducts();
}

// SORT BY PRICE
// Väljer prisknappen
const sortPriceBtn = document.querySelector("#sortPriceBtn");

// Lyssnar efter klick och kör då
sortPriceBtn.addEventListener("click", sortPrice);

// Funktion som sorterar efter pris (lågt -> högt)
function sortPrice() {
  teacups.sort((teacup1, teacup2) => {
    return teacup1.price - teacup2.price;
  });

  printProducts();
}

//Funktionen kan förkortas till teacups.sort((teacup1, teacup2) => teacup1.price - teacup2.price);

console.table(teacups);

//Sortera på pris
// Välj rätt knapp
//Lägg på en eventlistener som startar funktionen som sorterar på pris
//Skapa en funktion som sorterar varorna på pris

/**
 * SHOPPING BASKET
 *
 * - välja antal av en vara
 * - lägga varan i kundkorgen (+visuell feedback)
 *   = evenlistener på köp-knappen -> funktion som kopierar sort + antal + pris till kundkorgen
 * - varan ska dyka upp i kundkorgen
 *   = kundkorgen är en ny array? .push?
 *    Skriva ut vad som finns i kundkorgen (video kryyddhyllan, arrays)
 * - om fler än en vara av samma sort, uppdatera antalet
 * - uppdatera totalsumman
 * - kunna ta bort varor från kundkorgen?
 * - (uppdatera summa/vara)
 * - formuläret ska dyka upp när man trycker på beställ
 */

/*
// Väljer ut i HTML var varukorgen ska vara
const shoppingCart = document.querySelector("#shoppingCart");
console.log(shoppingCart);

// Skapar en kopia av teacupsarrayen
let teacupsCopy = [...teacups];
// Skapar en tom array for varukorgen
let order = [];

// Väljer alla "Lägg till i varukorgen"-knappar
const addToCartBtns = document.querySelectorAll(".addToCart");

//Lägger till eventlyssnare som efter klick kör
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", addToCart);
});

//Kollar igenom hela arrayen teacups och om någon har amount > 0 läggs varan i arrayen order
function addToCart() {
  for (let i = 0; i < teacups.length; i++) {
    if (teacupsCopy[i].amount > 0) {
      order.push(teacupsCopy[i]);
    }
  }

  console.log(order);

  //Skriva ut varorna i varukorgen
  shoppingCart.innerHTML = "";
  for (let i = 0; i < order.length; i++) {
    <h3>${order[i].name}</h3>;
  }
}*/

/**
 * varukorg
 * gör en plats för varukorg
 * skapa en funktion som heter typ update order summary
 * filtrera alla varor som har amount > 0
 * skapa en ny array med de varorna
 * printa den arrayen i varukorgen
 */

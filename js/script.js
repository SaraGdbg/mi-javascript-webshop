/**
 ********* TEACUPS **********
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
 ********** PRINT TEACUPS TO WEBSHOP **********
 ********** PLUS/MINUS BTNS **********
 */
//Väljer rätt ställe att skriva ut varorna i
const teacupContainer = document.querySelector("#teacup-container");

// Skriver ut varorna
printProducts();

// Funktion som minskar 1 på vald varas amount efter tryck på minusknappen och sedan skriver ut en uppdaterade varulista där varans amount är uppdaterat
function decreaseAmount(e) {
  let index = e.target.id.replace("decreaseBtn-", "");
  index = Number(index);
  if (teacups[index].amount < 1) {
    teacups[index].amount = 0;
  } else {
    teacups[index].amount -= 1;
  }
  printProducts();
  addToCart();
}

// Ökar vald varas amount med 1 vid knapptryckning på plusknappen
function increaseAmount(e) {
  let index = e.target.id.replace("increaseBtn-", "");
  index = Number(index);
  teacups[index].amount += 1;
  //addToCart
  printProducts();
  addToCart();
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
        <button class="increase" id="increaseBtn-${i}">+</button>
      </div>
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

  // Väljer alla "Lägg till i varukorgen"-knappar
  const addToCartBtns = document.querySelectorAll(".addToCart");

  //Lägger till eventlyssnare som efter klick kör
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
}

/**
 *********** SORT PRODUCTS **********
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

console.table(teacups);
//Funktionen kan förkortas till teacups.sort((teacup1, teacup2) => teacup1.price - teacup2.price);

/**
 *********** SHOPPING BASKET **********
 */

//Väljer ut i HTML var varukorgen ska vara
const teacupsInCart = document.querySelector(".teacupsInCart");
const shippingAndSum = document.querySelector(".shippingAndSum");
const discounts = document.querySelector(".discounts");

// Skapar en tom array for varukorgen
let order = [];

//Kollar igenom hela arrayen teacups och om någon har amount > 0 läggs varan i arrayen order
//Kallar på funktionen som skriver ut varukorgen
//Startar även en timer på funktionen som tömmer varukorgen efter 15 min
function addToCart() {
  console.log("knappen trycktes på!");
  order = [];
  for (let i = 0; i < teacups.length; i++) {
    if (teacups[i].amount > 0) {
      order.push(teacups[i]);
    }
  }
  printCart();
  setTimeout(cartTimer, 900000);
}

let sumCart = 0;
let amountAllTeacups = 0;

let priceIncrease = 1;
const orderDate = new Date();
const isFriday = orderDate.getDay() == 5;
const isMonday = orderDate.getDay() == 1;
const currentHour = orderDate.getHours();
const frakt = 25;

let teacupPrice = 0;
let adjustedTeacupPrice = 0;
let adjustedTeacupSum = 0;

const basketAmount = document.querySelector(".basketAmount");

//Skriver ut varorna till varukorgen
function printCart() {
  teacupsInCart.innerHTML = "";
  shippingAndSum.innerHTML = "";
  basketAmount.innerHTML = "";

  //Räknar ut hur många varor som finns i varukorgen
  amountAllTeacups = order.reduce((a, b) => a + b.amount, 0);
  console.log(amountAllTeacups);

  // Uppdaterar antalet i varukorgen i headern
  basketAmount.innerHTML = `${amountAllTeacups}`;

  //Räknar ut summan i varukorgen
  sumCart = Math.round(order.reduce((a, b) => a + b.amount * b.price, 0));

  // Lägger på frakt på 25:- + 10% om man beställer 15 eller färre (annars ingen frakt)
  if (amountAllTeacups <= 15) {
    sumCart = Math.round(
      order.reduce((a, b) => a + b.amount * b.price, frakt) * 1.1
    );
  } else if (amountAllTeacups == 16) {
    sumCart = order.reduce((a, b) => a + b.amount * b.price, 0);
    alert("Du har uppnått fri frakt!"); //Hur göra på mobil?
  }

  // Måndagsrabatten, funkar
  if (isMonday && orderDate.getHours() < 10) {
    sumCart = Math.round(sumCart * 0.9);
    discounts.innerHTML = `<p class="discountMonday">Måndagsrabatt: 10% på hela beställningen.</p>`;
  }

  //Helgpåslag på pris - stämmer nu
  // Se Jennis tipsvideo, länk KW
  if ((isFriday && currentHour >= 15) || (isMonday && currentHour <= 3)) {
    priceIncrease = 1.15;
  }

  // Skriver ut i varukorgen varukorgen
  for (let i = 0; i < order.length; i++) {
    teacupPrice = order[i].price;
    if (order[i].amount >= 10) {
      teacupPrice *= 0.9;
    }
    // Uppdaterar pris för helgpåslag, men skriver inte ut det i arrayen
    adjustedTeacupPrice = teacupPrice * priceIncrease;
    adjustedTeacupSum = Math.round(adjustedTeacupPrice * order[i].amount);

    teacupsInCart.innerHTML += `
     <div class="currentOrder">
        <p class="cartProductName">${order[i].name}<p>
        <p class="cartProductAmount">${order[i].amount}st</p>
        <p class="cartProductPrice">Pris: ${adjustedTeacupSum}kr</p>
      </div>`;
  }
  shippingAndSum.innerHTML = `
      <p class="shipping">Fraktkostnad: 25kr + 10% av summan</p>
      <p class="cartSum">Totalkostnad: ${sumCart} kr</p>
    `;
}

// Knapp som avbryter ordern och tömmer varukorgen
const resetBtn = document.querySelector(".resetBtn");
console.log(resetBtn);
resetBtn.addEventListener("click", emptyCart);

function emptyCart() {
  for (let i = 0; i < order.length; i++) {
    order[i].amount = 0;
    teacupsInCart.innerHTML = `<p class="emptyCart">Varukorgen är tom.</p>`;
    shippingAndSum.innerHTML = "";
    basketAmount.innerHTML = "";
    console.log("detta funkar!");
  }
}
function clearMsg() {
  console.log("HEJ"); // Kom ihåg att ta bort sedan!
  teacupsInCart.innerHTML = `<p class="emptyCart">Varukorgen är tom.</p>`;
}

// Funktion som tömmer varukorgen efter 15 samt meddelar kunden
function cartTimer() {
  emptyCart();
  teacupsInCart.innerHTML += `
    <p class="timeOutMsg">Tiden för att slutföra köpet har gått ut. Välkommen åter!</p>
  `;
  setTimeout(clearMsg, 5000);
}

/**
 *********** FORM & ORDER FUNCTION **********
 */
// Variabler för att välja inputrutorna i formuläret
const firstNameInput = document.querySelector("#nameInput");
const lastnameInput = document.querySelector("#lastnameInput");
const adressInput = document.querySelector("#adressInput");
const zipCodeInput = document.querySelector("#zipCodeInput");
const cityInput = document.querySelector("#cityInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const emailInput = document.querySelector("#emailInput");
const discountInput = document.querySelector("#discountInput");

// Variabler för att kunna skriva ut felmeddelanden i formuläret
const nameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const adressError = document.querySelector(".adressNameError");
const zipCodeError = document.querySelector(".zipCodeError");
const cityError = document.querySelector(".cityError");
const phoneNumberError = document.querySelector(".phoneNumberError");
const emailError = document.querySelector(".emailError");
const discountError = document.querySelector(".discountError");

// Funktion som kontrollerar om förnamnet är korrekt ifyllt

// REGEX formulär
// RegEx för namn, efternamn, stad, gatuadress och rabattkod
const textRegEx = new RegExp(/^[a-zA-ZäöåÄÖÅ]+$i/);
// RegEx för postnummer
const zipCodeRegEx = new RegExp(/\d{3}\s?\d{2}/);
// RegEx för svensk mobilnummer
const mobileNrRegEx = new RegExp(/^((((0{2}?)|(\+){1})46)|0)7[\d]{8}/);
// RegEx för emailadress
const emailRegEx = new RegExp(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/);

// Väljer ut knapparna för val av betalmetod + gör en array av dem
const cardInvoiceRadios = Array.from(
  document.querySelectorAll('input[name="paymentOption"]')
);

// Variabler som används för att aktivera beställningsknappen när betalfälten är korrekt ifyllda
const inputs = [
  document.querySelector("#creditCardNumber"),
  document.querySelector("#creditCardYear"),
  document.querySelector("#creditCardMonth"),
  document.querySelector("#creditCardCvc"),
  document.querySelector("#idNr"),
];

// Väljer ut fältet för felmeddelande
const errorMsg = document.querySelector(".errorMsg");

// Skapar variabler av knapparna som väljer betalmetod
const invoiceOption = document.querySelector("#invoice");
const cardOption = document.querySelector("#card");

// Väljer ut inputfältet för personnummer
// Låter den vara kvar då den har en egen funktion
const personalId = document.querySelector("#idNr");

//Default faktura
let selectedPaymentOption = "invoice";

// Beställknappen ska vara inaktiv tills formuläret är ifyllt korrekt
// Lägg till orderBtn.removeAttribut('disabled') efter att alla fält är korrekt ifyllda
const orderBtn = document.querySelector(".orderBtn");
console.log(orderBtn);

// REGEX betalning
const personalIdRegEx = new RegExp(
  /^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/
);
const creditCardNumberRegEx = new RegExp(
  /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/
); //Mastercard

/**
 * REGEX-koll för formuläret
 */

/**
 * BETALNING OCH BESTÄLLNING
 */

//Lägger på en eventlistener som registrerar vilket av valen som är aktivt och startar
// funktionen som togglar mellan vilka inputfält som ska synas
cardInvoiceRadios.forEach((radioBtn) => {
  radioBtn.addEventListener("change", switchPaymentMethod);
});

inputs.forEach((input) => {
  input.addEventListener("change", activateOrderButton);
  input.addEventListener("focusout", activateOrderButton);
});

// Funktion som togglar mellan synlighet på inpufält beroende på vald betalmetod
function switchPaymentMethod(e) {
  invoiceOption.classList.toggle("hidden");
  cardOption.classList.toggle("hidden");

  selectedPaymentOption = e.target.value;
}

/* ------------------------------- INVOICE ----------------------------------*/

// Lägger till en eventlistener som lyssnar efter förändringar i fältet för personnr
// Ta bort change? JP har bägge i sin video
/*personalId.addEventListener("change", activateOrderButton);*/
personalId.addEventListener("focusout", activateOrderButton);

// Funktion som kontrollerar om personnr är giltigt svenskt personnr
function isPersonalIdNumberValid() {
  return personalIdRegEx.exec(personalId.value);
}

// Funktion som aktiverar beställningsknappen om alla fält i giltigt ifyllda
function activateOrderButton() {
  orderBtn.setAttribute("disabled", "");
  /*errorMsg.innerHTML += ``; //Flytta ut felmeddelandet?*/

  if (selectedPaymentOption === "invoice" && !isPersonalIdNumberValid()) {
    /*errorMsg.innerHTML += `Felaktigt personnummer.`; //Behövs felmeddelande på persnr?*/
    return;
  }
  if (selectedPaymentOption === "card") {
    // Kontrollerar kortnumret
    if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
      console.warn("Credit card number not valid.");
      return;
    }
    // Kontrollerar året på kortet
    let year = Number(creditCardYear.value);
    const today = new Date();
    const shortYear = Number(String(today.getFullYear()).substring(2));

    if (year > shortYear + 2 || year < shortYear) {
      console.warn("Credit card year not valid.");
      return;
    }

    // Kontrollerar månaden på kortets giltighetstid
    let month = creditCardMonth.value;
    let monthString = month.toString();
    let paddedMonth = monthString.padStart(2, "0");

    if (paddedMonth < 1 || paddedMonth > 12) {
      console.warn("Credit card month not valid.");
      return;
    }
    // Kontrollerar kortets CVC
    if (creditCardCvc.value.length != 3) {
      console.warn("CVC not valid.");
      return;
    }
  }

  orderBtn.removeAttribute("disabled");
}
// Lägg till en timer på felmeddelandet?

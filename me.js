"use strict";
const storeTable = document.getElementById("store-table");

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function location(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerHour,
  customersEachHour,
  cookiesEachHour,
  totalDailyCookies,
  calCustomerEachHour,
  calCookiesEachHour
) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.render();
}


CookieStore.prototype.calcCustomersEachHour = function () {
  // console.log("working");
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      randomNum(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

CookieStore.prototype.calcCookiesEachHour = function () {
  // this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};


location.prototype.generateTotalDailyCookies = function(){
  for (let i = 0; i < this.cookiesEachHour.length; i++ ){
    this.calCookiesEachHour[i] = parseInt(Math.randomNum() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);
  }
};
    
       location.prototype.calCook


City.prototype.totalDailyCookies = function () {
  return randomAge(3, 11) + " months";
};

City.prototype.render = function () {
  const containerElement = document.getElementById("container");

  const article = document.createElement("article");
  containerElement.appendChild(article);

  const h3 = document.createElement("h3");
  h3.textContent = this.name;
  article.appendChild(h3);

  const ul = document.createElement("ul");
  article.appendChild(ul);
  for (let i = 0; i < this.hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.City[i];
    ul.appendChild(li);
  }
  const table = document.createElement("table");
  article.appendChild(table);

  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);


  const dataRow = document.createElement("tr");
  table.appendChild(dataRow);

  // add data cell
  const kidsData = document.createElement("td");
  kidsData.textContent = this.isGoodWithKids;
  dataRow.appendChild(kidsData);

  const dogsData = document.createElement("td");
  dogsData.textContent = this.isGoodWithDogs;
  dataRow.appendChild(dogsData);

  const catsData = document.createElement("td");
  catsData.textContent = this.isGoodWithCats;
  dataRow.appendChild(catsData);

  // add the cats image
  const image = document.createElement("img");
  image.setAttribute("src", this.imageUrl);
  image.setAttribute("alt", `${this.name} profile shot.`);
  article.appendChild(image);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const eric = new Kitten(
  "eric",
  ["cuddling", "chasing string", "catnip"],
  true,
  false,
  true,
  "eric.jpg"
);
const anna = new Kitten(
  "anna",
  ["hand gliding", "sipping milk", "fomula one"],
  true,
  false,
  true,
  "anna.jpg"
);
const val = new Kitten(
  "val",
  ["sword fighting", "sushi bars", "extreme ironing"],
  true,
  true,
  false,
  "val.jpg"
);
const batcat = new Kitten(
  "batcat",
  ["fighting crime", "caves", "being rich"],
  true,
  true,
  true,
  "batcat.jpg"
);

console.log(eric);
console.log(anna);
console.log(val);

// eric.render();
// anna.render();
// val.render();

newStoreForm.addEventListener("submit", function (event) {
  e.preventDefault();
  const storeName = event.target.storeName.value;
  const minCustPerHour = event.target.minCustPerHour.value;
  const maxCustPerHour = event.target.maxCustPerHour.value;
  const avgCookiesPerHour = event.target.avgCookiesPerHour.value;

  const newCookieStore = new CookieStore(
    storeName,
    minCustPerHour,
    maxCustPerHour,
    avgCookiesPerHour
  );
  console.log(newCookieStore);
  renderAllStores();
  newStoreForm.reset();
});

function renderAllStores() {
  for (let i = 0; i < AllStores.length; i++) {
    allStores[i].render;
  }
}
renderAllStores();



"use strict";
console.log("Script In Construction");

const storeTable = document.getElementById("store-table");
const newStoreForm = document.getElementById("newStoreForm");

const allStores = [];

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStore(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerHour
) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.pushStore();
  this.render();
}

CookieStore.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      randomNum(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

CookieStore.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStore.prototype.pushStore = function () {
  allStores.push(this);
};
CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = this.storeName;

  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }
  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);
  storeTable.appendChild(tr);
};

function hoursRow() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Store Location";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  const storeTotalsHeaderCell = document.createElement("th");
  storeTotalsHeaderCell.textContent = "Store Totals";
  tr.appendChild(storeTotalsHeaderCell);
  storeTable.appendChild(tr);
}

hoursRow();

// test constructor works
const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const dubai = new CookieStore("Dubai", 23, 65, 6.3);
const Lima = new CookieStore("Lima", 2, 10, 4);
const Paris = new CookieStore("Paris", 3, 15, 13);
const Tokyo = new CookieStore("Tokyo", 3, 5, 1.2);

function hourlyTotals() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Hourly Totals";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    let hoursAdded = 0;
    for (let j = 0; j < allStores.length; j++) {
      const hourAmount = allStores[j].cookiesEachHour[i];
      hoursAdded += hourAmount;
    }
    th.textContent = hoursAdded;
    tr.appendChild(th);
  }

  let totalTotals = 0;
  for (let i = 0; i < allStores.length; i++) {
    totalTotals += allStores[i].totalDailyCookies;
  }

  const totalsCell = document.createElement("th");
  totalsCell.textContent = totalTotals;
  tr.appendChild(totalsCell);

  storeTable.appendChild(tr);
}
hourlyTotals();

newStoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  storeTable.innerHTML = "";
  hoursRow();

  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCustPerHour.value;
  const maxCustInput = event.target.maxCustPerHour.value;
  const avgCookiesInput = event.target.avgCookies.value;

  const store = new CookieStore(
    storeNameInput,
    minCustInput,
    maxCustInput,
    avgCookiesInput
  );

  hourlyTotals();
  newStoreForm.reset();
});
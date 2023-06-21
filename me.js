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

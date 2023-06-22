"use strict";
console.log("Script In Construction");

const container = document.getElementById("container");
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
  this.pushCookiStore = function () {
    allCookieStores.push(this);
    console.log(allStores);
  };
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

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

  // create a table row
  const tr = document.createElement("tr");

  // create a table data cell
  const th = document.createElement("th");
  th.textContent = this.storeName;

  // append the table data to the table row
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

// test constructor works
const seattle = new CookieStore("seattle", 23, 65, 6.3);
const dubai = new CookieStore("dubai", 23, 65, 6.3);
const Lima = new CookieStore("lima", 21, 15, 13);
const Paris = new CookieStore("Paris", 21, 15, 13);
const Tokyo = new CookieStore("Tokyo", 21, 15, 13);
const Totals = new CookieStore("Totals", 21, 15, 13);

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
    avgCookiesPerHour);
  console.log(newCookieStore);
  renderAllStores();
  newStoreForm.reset();
});

function renderAllStores(){
  for (let i = 0; i < AllStores.length; i++ ){
    allStores[i].render;
  }
}
  renderAllStores();

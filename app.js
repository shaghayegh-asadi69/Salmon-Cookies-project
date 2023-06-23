"use strict";

const storeTable = document.getElementById("store-table");
const newStoreForm = document.getElementById("new-store-form");

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

const allStores = [];

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

const seattle = new CookieStore("seattle", 23, 65, 6.3);
const tokyo = new CookieStore("tokyo", 3, 24, 1.2);
const dubia = new CookieStore("dubia", 11, 38, 2.3);
const paris = new CookieStore("paris", 20, 38, 2.3);
const lima = new CookieStore("lima", 2, 16, 4.6);

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
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
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

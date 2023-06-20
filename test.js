"use strict";
document.getElementById(container);

const hours = [
    "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"
];

// console.log(hours.length);
    const Seattle = {
    storeName: "Seattle",
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerHour:6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 2772,
    calCustomerEachHour: function () {
        for (let i = 0; i <hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
        }
       console.log(this.customersEachHour);
    },
    calCookiesEachHour: function(){
        for (let i = 0; i < hours.length;i++ ){
            const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies +=oneHour;
    }
},
     render: function (){
        this.calCookiesEachHour();
        this.calCookiesEachHour();
    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.storeName;
    article.appendChild(h3);

    const ul = document.createElement("ul");
    article.appendChild(ul);
    
    for ( i = 0; i <hours.length; i++){
        const li = document.createElement ("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour}`
    }
/**
 * Represents a book.
 * @constructor
 * @param {string} name - Ovo je osoba koja je naručila order
 * @param {string} meal - Ovo je naziv jela koje je osoba naučila
 * @param {number} estimation - vrijeme pripreme narudžbe
 */

/*1*/

const processOrder = function(name, meal, estimation, callback) {
    const status = `${name}'s ${meal} is preparing`;
    callback(status);

    setTimeout(function() {
        const status = `${name}'s ${meal} is ready`;
        callback(status);
    }, estimation);
}

console.log("Matilda orders...");
processOrder("Matilda", "Cheeseburger", 2000, function(status){
    console.log(status);
});

console.log("Joseph orders...");
processOrder("joseph", "Fruit salad", 3000, function(status){
    console.log(status);
});

console.log("Tina orders...");
processOrder("Tina", "Bottle of water", 1000, function(status){
    console.log(status);
});

/*2*/

const buildSomething = function (housePart, estimate, callback) {
    console.log(housePart + " building started...");

    setTimeout(function(){
        if (true) {
            callback(housePart, "ready");
        } else {
            callback(housePart, "not ready");
        }
    }, estimate);
}

buildSomething("Foundations", 1000, function (housePart, status){
    let houseParts = housePart;
    console.log(`${houseParts} are ${status}`);

    if (status === "ready"){
        buildSomething("Walls", 2000, function(housePart, status){
            houseParts += `, ${housePart}`;
            console.log(`${houseParts} are ${status}`);

            if (status === "ready"){
                buildSomething("Roof", 3000, function(housePart, status){
                    houseParts += `, ${housePart}`;
                    console.log(`${houseParts} are ${status}`);
                    console.log("House is built!");
                })
            }
        });
    }
});

/* 3 PROMISES*/

const buildSomething = function (housePart, estimate) {
    console.log(housePart + " building started...");

    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if (true) {
                resolve("ready");
            } else {
                reject("Unexpected error found, building cannot be continued!");
            }
        }, estimate);
    });
};

buildSomething("Foundations", 1000)
    .then((status) => {
        console.log(`Foundations are ${status}`);
        return buildSomething("Walls", 1000);
    })
    .then((status) => {
        console.log(`Walls are ${status}`);
        return buildSomething("Roof", 1000);
    })
    .then((status) => {
        console.log(`Roof is ${status}`);
        return buildSomething("House is built!");
    })
    .catch((err) => {
        console.log(err);
    });

/*4 PROMISE example*/
const promise1 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise 1 finished.")
    }, 2000);
})

const promise2 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise 2 finished.")
    }, 5000);
})

promise1.then(result => console.log(result));

Promise.all([promise1, promise2])
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log("Always executed"))

/*MODULES */
/*data.js*/
export const ime = "Tutankamon";

import {ime} from "data.js"
"use strict";
/*
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/
Object.defineProperty(exports, "__esModule", { value: true });
let name = 'Jonas';
const age = 99;
const isMarried = true;
let name2 = 'Jonas';
const age2 = 99;
const isMarried2 = true;
const marks = [10, 2];
const mixList = [10, 2, 'a', 'b'];
const listNumbers = [1, 2];
const listStrings = ['a', 'b'];
const listFixedPositions = [10, 2, 'a', 'b'];
const listNumbersOrStrings = ['a', 'b'];
const listNumbers2 = [1, 2];
const listStrings2 = ['a', 'b'];
const listmix2 = ['a', 'b', 5];
let notSure;
notSure = true;
notSure = 'asd';
function sum(a, b) {
    if (a > 5) {
        return 'Daugiau';
    }
    if (b < 5) {
        return 'Maziau';
    }
    if (a === 5 && b === 5) {
        return `${a} ir ${b} kabejo palubej`;
    }
    return '' + (a + b);
}
function connectStrings(a, b) {
    return a + b;
}
sum(7, 5);
// sum('asd', 5);
// sum('5456', 5);
function gautiDuomenu() {
    return [1, 2, 3];
}
function gautiDuomenu2() {
    return [1, 2, 3];
}
function gautiDuomenu3() {
    return [1, 2, 3];
}
async function gautiDuomenu4() {
    return [1, 2, 3];
}
async function gautiDuomenu5() {
    return [1, 2, 3];
}
async function random() {
    // Youtube: event loop
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Daugiau');
            }
            else {
                reject('Ne daugiau');
            }
        }, 2000);
    });
}
console.log('Random: start');
try {
    const a = await random();
    console.log('Random:', a);
}
catch (error) {
    console.log('Random:', error);
}
let s = Math.random() < 0.5 ? 'Labas' : 123;
if (typeof s === 'string') {
    s = s.toLowerCase();
}
else {
    s = s.toFixed(2);
}
console.log(s);

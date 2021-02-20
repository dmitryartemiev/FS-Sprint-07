'use strict'

let count = 0;
let expiring = new Date(Date.now()+60000) ; 

console.log(expiring);
console.log(document.cookie)
document.addEventListener('DOMContentLoaded', (e) => {
    
    count++;
})
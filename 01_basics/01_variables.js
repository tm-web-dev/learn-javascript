const accoundId = 144553
let accountEmail = "info@tmwebdev.com"
var accountPassword = "12345"
accountCity = "Shimla"
let accountState;

// accoundId = 2 // changes not allowed in constant 

accountEmail = "thakur@tmwebdev.com" // Can change in Let
accountPassword = "2121212" // can change in var
accountCity = "Mandi"

console.log(accoundId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoundId, accountEmail, accountPassword, accountCity, accountState]);

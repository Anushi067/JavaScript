const accountId = 144678
let accountEmail = "anushi@google.com"
var accountPassword = "1235456"
accountCity = "Kota"

// accountId = 3 // not allowed
 accountEmail = "ab@ab.com"
 accountPassword = "232345"
 accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
const accountId = 1445556;
let accountEmail = "dspyadavdeepak01@gmail.com";
var accountPassword = "123456";

/*
prefer not to  use var
because of issue in block scope and functional scope
*/

accountCity = "Lucknow";
let accountState;

// accountId = 2;  //not allowed, because we have assiged to const;

accountEmail = "dy@google.com";

accountPassword = "dy01";

accountCity = "Varanasi";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
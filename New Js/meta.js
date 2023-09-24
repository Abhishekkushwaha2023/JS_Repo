let regex = /Welcome/;
let str1 = "Welcome to our Company. Welcome Back";
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op); 



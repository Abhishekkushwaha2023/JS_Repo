var regex = /Hello/g
var str1 = "Hello and Welcome to our Youtube. Say Hey to all."


//exec()

/* var output = regex.exec(str1);
console.log(output);
output = regex.exec(str1);
console.log(output);*/

//test()

// var output = regex.text(str1);
// console.log(output);

//match()

/*

var output = str1.match(regex);
console.log(output);

*/


//replace()

var output = str1.replace(regex, "Hi");
console.log(output);

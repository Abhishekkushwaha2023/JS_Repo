/*
function f1()
{
    console.log("This is function 1");
}
function f2()
{
    console.log("This is function 2")
}

f1();
f4();
*/

/*
function makeOrder()
{
    console.log("Here is your Black Coffee, Enjoy your Day");
}

try {
    makeOrder();
    processOrder();
} catch (error) {
    console.log("Sorry, an error occurred in your program");
}
finally{
    console.log("This block will execute. No matter what!");
}
*/

var a = 9;
if(a<10){
    throw new Error("This is a customisable error.")
}
else{
    console.log("Working fine!");
}




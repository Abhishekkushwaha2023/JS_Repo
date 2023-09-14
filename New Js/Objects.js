
/*
var car = {
    car_manufacturer : "Audi",
    car_model : "Q7",
    price : 50000,


    allwheeldrive : function()
    {
        document.write("This car comes with four wheel drive")
       // return("This car comes with four wheel drive");
    }
}
car.allwheeldrive();
//  document.write("<h1>"+car.allwheeldrive()+"</h1>");
//  document.write("<h1>"+car.car_manufacturer+"</h1>");
var car_manufacturer = "Audi";
var car_model = "Q7";
var price = 50000;

function allwheeldrive()
{
    document.write("This car comes with Quattro all-wheel drvie");
}

allwheeldrive();
*/
/*

function cars(car_manufacturer,car_model, price)
{
    this.car_manufacturer = car_manufacturer;
    this.car_model = car_model;
    this.price = price;

    this.allwheeldrive = function()
    {
        document.write("<h2>"+"This car comes with four wheel drive"+"</h1>");
    }
}
var c1 = new cars("Audi","Q7",50000);
c1.allwheeldrive();
var c2 = new cars("BMW","X7",40000);
document.write(c2.price);

*/


var str1 = "Hello";
document.write("<h1>"+typeof(str1)+"</h1>")

var car = {
    car_manufacturer : "Audi",
    car_model : "Q7",
    price : 50000,

    allwheeldrive : function()
    {
        document.write("This car comes with four wheel drive");
    }
}


car.allwheeldrive();

//   150 lines
//   car.car_color = "Black";
//   document.write("<h1>"+car.car_color+"</h1>");



car.price = "70000";
document.write("<h1>"+car.price+"</h1>");
document.write("<h1>"+typeof(car.price)+"</h1>");

/*
car.newfun = function()
{
    return("Function successfully added");
}

document.write("<h1>"+car.newfun()+"</h1F>");

*/

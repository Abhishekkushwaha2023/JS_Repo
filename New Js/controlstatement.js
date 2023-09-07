// var x = 10;
// if (x<10)
// {
//     document.write("The value of x is less than 10");
// }
// else if(x=10)
// {
//     document.write("The value of x is equals to 10");
// }
// else
// {
//     document.write("The value of x is greater than 10");
// }

 
/*
var x = 5;
if (x%2==0)
{
    document.write("Even number");
}

else
{
    document.write("Odd number");
}

*/

/*
var y = 0;
if (y>0)
{
    document.write("Positive number");
}
else if(y<0)
{
    document.write("Negative number");
}

else
{
    document.write("Zero");
}
*/


/*
var x = -5;
if (x>0)
{ 
    if(x%2==0)
    {
        document.write("Positive and even");
    }
    else
    {
        document.write("Positive and odd");
    }
}

else if(x<0)
{
    if(x%2==0)
    {
        document.write("Negative and even");
    }
    else
    {
        document.write("Negative and odd");
    }
}

else
{
    document.write("Number is Zero")
}
*/

var x = 7;
if (x>0 && x%2==0)
{
    document.write("Number is positive and even");
}

else if (x>0 && x%2!=0)
{
    document.write("Number is positive and odd");
}

else if (x<0 && x%2==0)
{
    document.write("Number is negative and even");
}

else if (x<0 && x%2!=0)
{
    document.write("Number is negative and odd");
}

else
{
    document.write("Number is zero");
}

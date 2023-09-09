/*
program to check if a number is prime or not
Using for loop
*/
var number = 75;
var isPrime = true;


// check if number is equal to 1
if (number === 1)  {
    document.write("1 is neither prime nor composite number.")
}

// check if number is greater than 1
else if (number > 1)  {
    
    //looping through 2 to number-1
    for (var i = 2; i < number/2; i++)
    while(i<number/2)
    {
        if (number % i == 0)
        {
            isPrime = false;
            break;
        }
    } 
}

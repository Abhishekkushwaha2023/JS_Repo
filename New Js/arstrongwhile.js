// program to check an Armstrong number of three digits

var number = 121;
var sum = 0;

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit 
    var remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
    
}

// check the condition
if (sum == number)  {
    document.write(number+"is an Armstrong number.");
}
else {
    document.write(number+"is not an Armstrong number.");
}


/*
var regex = /[^def]def/
var str1 = "This string contains def";
var output = regex.test(str1);
console.log(output);
*/


function employee()
{
    var empid = document.getElementById("eid").value;
    var check = /[DE]253[10-99]/
    if((check.test(empid)))
    {
        alert("Valid employee ID")
    }
    else
    {
        alert("Invalid employee ID");
    }
}















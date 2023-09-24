function validate()
{
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var age = document.getElementById("age").value;

    if(uname.trim() == "" || pass.trim() == "" || age.trim() == "")
    {
        alert("Missing credentials");
        return false;
    }
    else if(uname == "Abhi" && pass == "12345" && age>=13)
    {
        alert("Sign-up successful");
        return true;
    }
    else if(age < 13)
    {
        alert("Underaged");
        return false;
    }
    else
    {
        alert("Wrong id and password");
        return false;
    }
}







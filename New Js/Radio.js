function Print(){
    var x = document.getElementById("rad1");
    var y = document.getElementById("rad2");
    if(x.checked == true)
    {
        alert("The correct answer is :"+y.value);
    }
    else if(y.checked == true)
    {
        alert("Right Answer");
    }
    else
    {
        alert("No option selected");
    }
}



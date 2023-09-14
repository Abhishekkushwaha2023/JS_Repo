function fun1(){
    var x = document.getElementById("one");
    if(x.options[x.selectedIndex].value == "Brendon Eich")
    {
        alert("The answer is correct");
    }
    else
    {
        alert("The answer is wrong");
    }
}



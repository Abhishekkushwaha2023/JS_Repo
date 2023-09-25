var widht = 100;
var addition = 2;
var intervalID = 0;

function increase()
{
    clearInterval(intervalID)
    intervalID = setInterval(zoomin,10)
}

function decrease()
{
    clearInterval(intervalID)
    intervalID = setInterval(zoomout,10)
}

function zoomin()
{
    if(width<200)
    {
    widht = width+addition;
    document.getElementById("img1").style.width;
    console.log(widht)
}
else
{
    clearInterval(intervalID)    
}
}
function zoomout()
{
    if(width>100){
    widht = width-addition;
    document.getElementById("img1").style.width;
    console.log(widht)
}
else
{
    clearInterval(intervalID)    
}

}




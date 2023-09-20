/* function abc(call)
{
    call();
}*/
/*
function one()
{
    setTimeout(function(){
    console.log("Function 1");
two();
}, 3000)
}

function two(){
    console.log("Function 2");
};


one(); 
two();

*/


function person(friend, person2)
{   
    setTimeout(function(){
    console.log("My friend's Company name is "+ friend);
    person2(); }, 3000);
}

function person2()
{
    console.log("My name is Abhi");
}

person("AK Code.",person2);
person2(); 






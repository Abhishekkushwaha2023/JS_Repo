function makeOrder(coffee){
    return new Promise((resolve, reject)=> {
        console.log("Making request for a "+coffee)
        if(coffee == "Black coffee"){
            resolve("Here is you coffee, Have a nice day")
        }
        else{
            reject(" Sorry! We serve Black coffee only.")
        }
    })
}

function processOrder(order){
    return new Promise((resolve,reject)=>{
        console.log("Processing Order")
        resolve("Extra Information "+order)
    })
}

/*
makeOrder("Latte").then(order=>{
    console.log("Order has been received")
    return processOrder(order)
}).then(processedOrder=>{
    console.log(processedOrder)
}).catch(error =>{
    console.log(error);
})

*/

async function func1(){
    try{
    var order = await makeOrder("Black coffee")
    console.log("Order has been received")
    var processedOrder = await processOrder(order)
    console.log(processOrder)
}
catch(error){
    console.log(error)
}
}
func1();





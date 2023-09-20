
/*
const Employee = {
    Post : function(){
        return "A software developer";
    },
    changeNmae : function(name){
        this.name = name;
    }
};

var E1 = Object.create(Employee);
E1.name = "Abhishek";
E1.role = "Web Developer";

var E1 = object.create(Employee, {
    name : {value : "Abhishek20",writable : true},
    role : {value : "Programmer"},
})

E1.changeName("Abhi");
console.log(E1);

*/


function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function(){
    return (this.name+" "+"is a content creator");
}

var Abhishek = new Employee("Abhishek",2,10000);
console.log(Abhishek);


function Programmer(name,id,salary,language){
    Employee.call(this, name, id, salary);
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;
var Adhi = new Programmer("Adhi",20,12000,"Js");
    console.log(Adhi);





class Employees{
    constructor(firstname, lastname,numberofyearsworked){
        this.firstname = firstname;
        this.lastname = lastname;
        this.numberofyearsworked = numberofyearsworked;


    }
}
let person1 = new Employees("James", " Brown","4 years")
let person2 = new Employees("John", " Doe","5 years");
let arr =[person1,person2];

Employees.prototype.details = function(){
    return this.firstname + this.lastname +" has worked for "+ this.numberofyearsworked +" at the company "
}


arr.forEach((worker)=>{
    console.log(worker.details())
})

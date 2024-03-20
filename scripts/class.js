class Person {
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname = lastname;

    }
    fullname(){
        return "Your fullname is " + this.firstname +" "+this.lastname;
    }



}


let p = new Person("Azah", "Sheyrhon");
let r = new Person("Neh", "Adelia");

console.log(p.fullname())
console.log(r.fullname())
//console.log("Hello " ,p.firstname,p.lastname)
// console.log("Hello " ,r.firstname,r.lastname)







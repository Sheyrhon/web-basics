class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;

    }
    greet(){
        console.log("Hi there!");
    }
}
Person.prototype.introducce = function(){
    console.log("Hi, I'm", this.firstname, this.lastname);
}
let p = new Person("Sheyrhon", "Chi");
p.introducce();
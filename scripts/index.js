// 1. Create a class for Person including the constructor for firstname
// and lastname .
// 2. Create a variable and assign a value of the new Person object
// using your friend's first and last names.
// 3. Now add a second variable with another friend's name using
// their first name and last name.
// 4. Output both friends into the console with a greeting of hello .

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;

    }
    fullname(){
        console.log('Hey ',this.firstname + ' '+ this.lastname);
    }
    // compliment(firstname, lastname){
    //     return "Hello "+firstname,+lastname; 
    // }

}
 let p = new Person('Bessingi','Naura')
 let t = new Person('Nguessong','Suzy')

p.fullname();
t.fullname();
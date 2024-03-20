class Animals{
    constructor(name,sound){
        this.name =name;
        this.sound = sound;


    }
    speak(){
        console.log(this.name + " " + this.sound);

        } 

   
}
Animals.prototype.move=function(){
    return this.name + " is moving";
}
let cat = new Animals("Cat","meow")
console.log(cat.move());
console.log(cat);

class Vehile{
    constructor(color, currentSpeed, maxSpeed){
        this.color=color;
        this.currentSpeed =currentSpeed;
        this.maxSpeed=maxSpeed;

    }
    move(){

        console.log("moving at ", this.currentSpeed);
    }
    accelerate(amount){
        this.currentSpeed += amount;
    }

}


class Motocyle extends Vehile{
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel= fuel;
    }
    doWheelie(){console.log("Driving on one wheel!");}
}

let motor = new Motocyle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
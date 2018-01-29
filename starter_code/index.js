const Elevator = require('./elevator.js');

const elevator = new Elevator();
for(i = 0; i<10 ; i++){
    
    elevator.log();
    elevator.floorUp();
}
for(i = 10; i>0 ; i--){
    
    elevator.log();
    elevator.floorDown();
}
elevator.log();

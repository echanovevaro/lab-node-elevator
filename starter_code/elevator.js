class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
    this.interval   =  0;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.interval = setInterval(() => {
      update();
    }, 1000);
   }
  
   stop() {
    clearInterval (this.interval);
  }
  
  update() { 
    log();
  }
  
  _passengersEnter() { }

  _passengersLeave() { }
  
  floorUp() {
    if(this.floor<this.MAXFLOOR ){
      this.floor++;
    }
   }
  
   floorDown() {
    if(this.floor>0){
      this.floor--;
    }
   }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
   }

  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}` );
  }
}

module.exports = Elevator;

class Ninja{
  constructor(name){
    this.name=name;
    this.health=100;
    this.speed=3;
    this.strength=3;
  }
  sayName(){
    console.log("name is: " + this.name);
  }
  showStat(){
    console.log("stat is: "+this.name+ " " + this.health+ " " +this.speed+ " " +this.strength);
  }
  drinkSake(){
    this.health += 10;
    console.log("name: " + this.name+ " new health: " + this.health);
  }
}

class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health=200;
    this.speed=10;
    this.strength=10;
    this.wisdom=10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("try to be perfect in anything.")
  }
}
// var ninja1= new Ninja('rabin');
// ninja1.sayName();
// ninja1.showStat();
// ninja1.drinkSake();

var ninja2= new Sensei("sumnima");
ninja2.showStat();
ninja2.speakWisdom();
ninja2.showStat();
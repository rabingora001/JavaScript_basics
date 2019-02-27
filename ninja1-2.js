function Ninja(name, health){
    this.name=name;
    this.health=health;
    var speed = 3;
    var strength = 3;
    
    this.sayName=function(){
      console.log("Hi, my name is " + this.name);
    }
    
    this.showStat=function(){
      console.log( this.name+ " "  + this.health+ " "+ speed+ " " +strength);
    }
    this.drinkCoolaid=function(){
      this.health+=10;
      console.log(this.health);
    }
    this.punch=function(obj){
      obj.health -= 5;
      console.log("Name: " + obj.name + "    health: " +obj.health);
    
    }
    this.kick = function(obj){
      if(obj instanceof Ninja){
        obj.health -= (15 * strength);
        console.log(obj.name + " was kicked by " + this.name + " and lost " + (15 * strength) + " health!. health= "+ obj.health);
      }
      else{
        console.log(obj.name + "'s not a ninja!")
    }
  }
  }
  
  var ninja1 = new Ninja("hyabusa", 100);
  // ninja1.sayName();
  ninja1.showStat();
  // ninja1.drinkCoolaid();
  
  var ninja2 = new Ninja("rabin", 100);
  ninja2.showStat();
  ninja1.punch(ninja2);
  ninja2.punch(ninja1);
  ninja1.punch(ninja2);
  
  ninja1.kick(ninja2);
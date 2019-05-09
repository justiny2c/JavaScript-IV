/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// === GameObject ===
function GameObject(facts) { 
    this.createdAt = facts.createdAt;
    this.name = facts.name;
    this.dimensions = facts.dimensions;
    }
   
   GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`
    };
 
  
    // // === CharacterStats ===
    function CharacterStats(stats){
      this.healthPoints = stats.healthPoints;
      GameObject.call(this, stats);
      }
  
    CharacterStats.prototype = Object.create(GameObject.prototype);
  
    CharacterStats.prototype.takeDamage = function(){
        return `${this.name} took damage.`
    };
  
    // // * healthPoints
    // // * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    // // * should inherit destroy() from GameObject's prototype
  
    // === Humanoid (Having an appearance or character resembling that of a human.) ===
  function Humanoid(details){
    this.team = details.team;
    this.weapons = details.weapons;
    this.language = details.language;
    CharacterStats.call(this, details);
    };
  
  Humanoid.prototype = Object.create(CharacterStats.prototype)
  Humanoid.prototype.greet = function(){
      return `${this.name} offers a greeting in ${this.language}`
    };
  

  
    // const mage = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 1,
    //     height: 1,
    //   },
    //   healthPoints: 5,
    //   name: 'Bruce',
    //   team: 'Mage Guild',
    //   weapons: [
    //     'Staff of Shamalama',
    //   ],
    //   language: 'Common Tongue',
    // });
  
    // const swordsman = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 2,
    //     height: 2,
    //   },
    //   healthPoints: 15,
    //   name: 'Sir Mustachio',
    //   team: 'The Round Table',
    //   weapons: [
    //     'Giant Sword',
    //     'Shield',
    //   ],
    //   language: 'Common Tongue',
    // });
  
    // const archer = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 1,
    //     width: 2,
    //     height: 4,
    //   },
    //   healthPoints: 10,
    //   name: 'Lilith',
    //   team: 'Forest Kingdom',
    //   weapons: [
    //     'Bow',
    //     'Dagger',
    //   ],
    //   language: 'Elvish',
    // });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  
  function Villain(attributes){
    Humanoid.call(this, attributes);
  }

  Villain.prototype = Object.create(Humanoid.prototype);
  
  Villain.prototype.destruction = function(){
    this.healthpoints -= 3 ;
     
    if(this.healthpoints <= 0){
      return this.destroy();
      }
    else{
      return this.takeDamage();
    };
  }

    const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    healthPoints: 12,
    name: 'Cersei',
    team: 'Hearts',
    weapons: [
      'Fork',
    ],
    language: 'English',
  });

  console.log(villain.destruction())

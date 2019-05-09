// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Window/Global Object Binding: refers to the value of "this" within the Object window -- meaning Object("value"){}

// * 2. Implicit Binding: When dot notation is used to invoke a function within an Object -- i.e. Object.function

// * 3. New Binding: Allows you to call to new values of "this" within Object constructor and function when creating a new variable to call the Object

// * 4. Explicit Binding: Explicitly calling values to the key(s) within a constructor function

// *
// * write out a code example of each explanation above
// */

// // Principle 1
// // code example for Window Binding
// function whatsUp(pronoun){
//   this.noun = pronoun;
//   this.adjective = "smart"
//   console.log(`What's up, ${this.adjective} ${this.noun}`)
// }

// whatsUp("dude")
// whatsUp("man")

// // Principle 2
// // code example for Implicit Binding

// const what = {
//   whatWeSay: "WHAT?!",
//   whoWeSay: function(name) {
//     console.log(`${this.whatWeSay} ${name}`)
//   }
// };

// what.whoWeSay("Steve");

// // Principle 3
// // code example for New Binding

// // --using whatsUp constructor from Principle 1--

// const bob = new whatsUp("Bob")
// const jamie = new whatsUp("James")

// // Principle 4
// // code example for Explicit Binding

// const newPerson = {
//   noun: "guuuurl",
//   greeting: "Well hay there..."
// }

// function okayHi (hello){
//   return `${this.greeting} ${this.noun}`
// }

// console.log(okayHi.call(newPerson))

// -----BREAK-----

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  // === GameObject ===
  class GameObject { 
    constructor(facts){
    // super(facts);
    this.createdAt = facts.createdAt;
    this.name = facts.name;
    this.dimensions = facts.dimensions;
    };
    destroy (){
      return `${this.name} was removed from the game.`
    };
  };
  
    // // === CharacterStats ===
  class CharacterStats extends GameObject{
      constructor(facts){
      super(facts);
      this.healthPoints = facts.healthPoints;
      };
      takeDamage(){
        return `${this.name} took damage.`
      };
  };
  
  class Humanoid extends CharacterStats{
    constructor(facts){
      super(facts);
    this.team = facts.team;
    this.weapons = facts.weapons;
    this.language = facts.language;
    };
    greet(){
      return `${this.name} offers a greeting in ${this.language}`
    };
  };
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
   
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  
  class Villain extends Humanoid{
    constructor(facts){
      super(facts);
    }
    destruction(){
      this.healthpoints -= 3 ;
       
      if(this.healthpoints <= 0){
        return this.destroy();
        }
      else{
        return this.takeDamage();
      };
    }
    };
  
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
  
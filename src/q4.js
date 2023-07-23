/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's #abilities array.     
*/
class Parent{
    abilities = []

    constructor(){
        this.abilities.push("Parenting");
        this.abilities.push("Role modeling");
    }

    showAbilities(){
        console.log("These are the abilities:")
        for(const a of this.abilities){
            console.log(a);
        }
    }
}

const p = new Parent();
p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling".

// Task 1: Add code here - Add a constructor to the Child class can calls super().
class Child extends Parent {
    // Adding a constructor
    constructor() {
        super(); // to invoke parent's constructor. 
    }

    // Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's #abilities array.     
    addNewAbility(ability) {
        this.abilities.push(ability);
    }
}


const c = new Child();
c.addNewAbility("Dancing");
c.showAbilities(); // This function should print "Parenting", "Role modeling" and "Dancing".

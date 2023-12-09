class newHero {
    constructor(heroName, heroClass, heroAge) {
      this.heroName = heroName;
      this.heroClass = heroClass;
      this.heroAge = heroAge;
    }

    attack()
    {
        let attackType
        switch(this.heroClass){

            case "Warrior":
                attackType = "his sword"
            break

            case "Mage":
                attackType = "magic"
            break

            case "Monk":
                attackType = "martial arts"
            break

            case "Ninja":
                attackType = "a shuriken"
            break
        }
        
        for(let i=1;i<5;i++){
            console.log("Loading "+this.heroName+"'s attack! "+i+"/5")
          }
        console.log("Loading Complete!")
    
        console.log("The "+this.heroClass+" "+this.heroName+" used "+attackType+" against the enemy!")
    }


}

  let heroMage = new newHero("Eshrea","Mage","29")
  heroMage.attack()

  let heroWarrior = new newHero("Hyrrokkin","Warrior","31")
  heroWarrior.attack()

  let heroMonk = new newHero("Master Kai","Monk","20")
  heroMonk.attack()

  let heroNinja = new newHero("Lynja","Ninja","29")
  heroNinja.attack()

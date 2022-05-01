class Human {
   constructor(name, age) {
     this.name = name
     this.age = age
   }
}

function CreateHumans(name, age) {
   return new Human(name, age)
}

CreateHumans('Mike', 23)// result a human object with the passed in properties

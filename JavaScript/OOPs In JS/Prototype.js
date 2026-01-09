function Movie(title){
    this.title= title;
}

const movie1=new Movie("Avatar")

// console.log(movie1)
movie1.year=2020
// console.log(movie1)

const movie2 = new Movie("Inception")
// console.log(movie2)

// console.log(movie1.__proto__)
console.log(movie2.__proto__.__proto__.__proto__)


function Game(name, platform){
    this.name= name;
    this.platform= platform;
}
console.log(Game.prototype)
const fifa = new Game("Fifa 23", "PS5")
console.log(fifa.__proto__ === Game.prototype)

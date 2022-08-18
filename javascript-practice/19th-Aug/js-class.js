const Person = class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //getters and setters
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setAge(age) {
        this.age = age;
    }
    get getAge() {
        return this.age;
    }

    //methode
    makeASentance() {
        console.log(`Age of ${this.name} is ${this.age}`);
    }
    //static methode
    static calculateAge(user){
        console.log(`After 10 years ${user.name}'s age will be ${user.age+10}`)
    }
}

//creating user1 object using constructor
const user1 = new Person("John Samuel", 37);
console.log(user1)
console.log(`Age of ${user1.getName} is ${user1.getAge}`);

//creating user2 object without constructor
const user2 = new Person();
console.log(user2);
user2.setName = "George samuel"
user2.setAge = 25;
//accessing methode
user2.makeASentance()
// accessing Static methode
Person.calculateAge(user2);



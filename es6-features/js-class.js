class Student{
    name;
    standard;
    rank;
    constructor(name,standard,rank){
        this.name = name;
        this.standard=standard;
        this.rank = rank;
    }

    get name(){
        return this.name;
    }
    set name(name){
        this.name=name;
    }
}

const james = new Student("James",10,25)
console.log(james);
james.name="John"
console.log(james);
class Fruits{
    name;
    constructor(name){
        this.name=name;
    }
    generalIntroduction(){
        console.log("I'm a Fruit");
    }

    namedIntroduction(name){
        console.log(`My name is ${name}`);
    }    
}

class SoftFruit extends Fruits{
    sayNature(){
        console.log("I'm Soft fruit")
    }

    introduce(){
        super.namedIntroduction(this.name)
        super.generalIntroduction()
        this.sayNature()
    }
}

const banana = new SoftFruit("banana")
banana.introduce()
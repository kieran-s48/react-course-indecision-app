class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription(){
        let getDescription = super.getDescription;

        if (this.major()){
            description += `${this.major}`;
        }

        return description();
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let getGreeting = super.getGreeting;

        if (this.homeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}`;
        }

        return greeting();
    }

}


const me = new Traveller('Kieran Cole', 21, 'Manchester')
console.log(me.getGreeting());

const other = new Student()
console.log(me.getDescription());
var square = x => x * x;

console.log(square(9));


var user = {
    name: 'Flavio',
    sayHi: () => { //arrow function
        console.log(arguments); //This does not work in arrow functions
        console.log(`Hi. I'm ${this.name}`); //This does not work neither
    },
    sayHiAlt(){ //regular function
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`); //this does! Fucking weird rsss
    }
};


//user.sayHiAlt(1, 2, 3);
user.sayHi(1, 2, 3);
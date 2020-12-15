"use strict";

const soldier = {
    armor: true,
    health: 100,
    sayHello: function(){
        console.log('Hello!');
    }
};

const john = {
    health: 99
};

john.__proto__ = soldier;

john.sayHello();
console.log(john.health);
console.log(john.armor);

console.log(john); //при просмотре через консоль во вкладке __proto__ видим методы и свойства объекта "soldier"


//Современные способы назанчения прототипа:

const newSoldier = {};
Object.setPrototypeOf(newSoldier, soldier); //При условии что объкт которому назначем прототип уже был создан заранее
console.log(newSoldier); //В консоле появится вкладка __proto__ со свойствами объекта "soldier"


const otherSoldier = Object.create(soldier); // Создает новый объект уже с наследственностью на объект прототип "soldier"
console.log(otherSoldier); //В консоле появится вкладка __proto__ со свойствами объекта "soldier"

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number ...
let x = 10;
x = 12;
console.log(x);
//inferencia
let y = 12;
//annotation
let z = 12;
// tipos básicos
let Name = 'Deividi';
let age = 20;
const isAdmin = true;
console.log(Name);
// object
const myNumber = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
console.log(myNumber.toString());
myNumber.push(5);
console.log(myNumber);
// tuplas
let myTyple;
myTyple = [5, 'teste', ['a', 'b']];
// object literals -> {prop: value}
const user = {
    name: 'deividi',
    age: 20
};
console.log(user);
console.log(user.name);
//any aceita qualquer tipo
let a = 0;
a = 'teste';
a = true;
a = [];
//union type
let id = '10';
id = 200;
const userId = 10;
const productId = '001020';
// enum
//tamanho de roupas ( size: médio , size: pequeno)
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "m\u00E9dio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: 'camisa verde ',
    size: Size.m
};
console.log(camisa);
// literal types
let teste;
teste = 'autenticado';
// funcões
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayhelloto(name) {
    return `hello ${name}`;
}
console.log(sayhelloto('deividi'));
// void não possue retorno
function logger(msg) {
    console.log(msg);
}
logger('teste');
function greetinh(name, greet) {
    if (greet) {
        console.log(`olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greetinh('josé');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 3 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem tipos
function doSomethin(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('não passado um número ');
}
doSomethin(5);
doSomethin(true);
// generics
function showArraysItems(array) {
    array.forEach(item => {
        console.log(`item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const alfa = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(alfa);
// classes
class User {
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`o nome do usuário é ${this.name}`);
    }
    showUserRole() {
        console.log(`o Idade  do usuário é ${this.role}`);
    }
}
const zeca = new User('zeca', 'admin', true);
console.log(zeca);
console.log(zeca.showUserName());
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car('vw', 4);
fusca.showBrand();
//herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('audio', 4, 2.0);
a4.showBrand();
// decorator
// constructor decorator
function BaseParanters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParanters()
], Person);
const sam = new Person('san');
console.log(sam);

// string, boolean, number ...
let x: number = 10

x = 12

console.log(x)

//inferencia
let y = 12
//annotation
let z: number = 12

// tipos básicos
let Name: string = 'Deividi'
let age: number = 20
const isAdmin: boolean = true

console.log(Name)

// object
const myNumber: number[] = [1, 2, 3]

console.log(myNumber)
console.log(myNumber.length)
console.log(myNumber.toString())
myNumber.push(5)
console.log(myNumber)

// tuplas

let myTyple: [number, string, string[]]

myTyple = [5, 'teste', ['a', 'b']]

// object literals -> {prop: value}
const user: { name: string; age: number } = {
  name: 'deividi',
  age: 20
}

console.log(user)
console.log(user.name)

//any aceita qualquer tipo

let a: any = 0
a = 'teste'
a = true
a = []

//union type

let id: string | number = '10'

id = 200

//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = '001020'

// enum
//tamanho de roupas ( size: médio , size: pequeno)
enum Size {
  p = 'pequeno',
  m = 'médio',
  g = 'grande'
}

const camisa = {
  name: 'camisa verde ',
  size: Size.m
}

console.log(camisa)

// literal types
let teste: 'autenticado'
teste = 'autenticado'

// funcões
function sum(a: number, b: number) {
  return a + b
}
console.log(sum(12, 12))

function sayhelloto(name: string): string {
  return `hello ${name}`
}

console.log(sayhelloto('deividi'))

// void não possue retorno
function logger(msg: string): void {
  console.log(msg)
}
logger('teste')

function greetinh(name: string, greet?: string) {
  if (greet) {
    console.log(`olá ${greet} ${name}`)
  } else {
    console.log(`Olá ${name}`)
  }
}

greetinh('josé')

//interface

interface MathFunctionParams {
  n1: number
  n2: number
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 1, n2: 3 }))

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2
}
const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10
}
console.log(multiplyNumbers(someNumbers))

// narrowing
// checagem tipos
function doSomethin(info: number | boolean) {
  if (typeof info === 'number') {
    console.log(`O número é ${info}`)
    return
  }
  console.log('não passado um número ')
}

doSomethin(5)
doSomethin(true)

// generics
function showArraysItems<T>(array: T[]) {
  array.forEach(item => {
    console.log(`item: ${item}`)
  })
}

const a1 = [1, 2, 3]
const alfa = ['a', 'b', 'c']
showArraysItems(a1)
showArraysItems(alfa)

// classes
class User {
  name
  role
  isAproved

  constructor(name: string, role: string, isAproved: boolean) {
    this.name = name
    this.role = role
    this.isAproved = isAproved
  }

  showUserName() {
    console.log(`o nome do usuário é ${this.name}`)
  }

  showUserRole() {
    console.log(`o Idade  do usuário é ${this.role}`)
  }
}

const zeca = new User('zeca', 'admin', true)

console.log(zeca)
console.log(zeca.showUserName())

// interfaces em classes
interface Ivehicle {
  brand: string
  showBrand(): void
}

class Car implements Ivehicle {
  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`)
  }
}

const fusca = new Car('vw', 4)
fusca.showBrand()

//herança
class SuperCar extends Car {
  engine
  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels)
    this.engine = engine
  }
}

const a4 = new SuperCar('audio', 4, 2.0)
a4.showBrand()

// decorator

// constructor decorator
function BaseParanters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random()
      createAt = new Date()
    }
  }
}

@BaseParanters()
class Person {
  name

  constructor(name: string) {
    this.name = name
  }
}

const sam = new Person('san')

console.log(sam)

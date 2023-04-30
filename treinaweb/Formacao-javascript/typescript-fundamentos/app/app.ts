let nome: string
let idade: number

nome = "Jhonatan"
idade = 30

console.log(`${nome} ${idade}`)


function soma(a: number, b: number) {
  return a + b
}

console.log(soma(3, 2))

//Arrays
let a: (number | string)[] = []

a.push(1)
a.push(2)
a.push("Jhonatan")
console.log(a)
console.log('=======================')


// Types

type TipoArray = (number | string)[]

let x: TipoArray = [1,2,3,"Hello"]

console.log(x)

type Animal = {
  nome: string
  idade: number
}

let cachorro: Animal = {
  nome: "Luke",
  idade: 4
}

console.log(cachorro)
console.log('=======================')


// Enum

enum prodStatus {
  Ativo = 1,
  Inativo = 2,
  Indisponivel = 3,

}

function checarStatus(status: number) {
  switch(status) {
    case prodStatus.Ativo:
      console.log('Disponivel')
      break
    case prodStatus.Inativo:
      console.log('Indisponível')
      break
    case prodStatus.Indisponivel:
      console.log('Sem disponibilidade em estoque')
      break
  }
}

checarStatus(3)
console.log('=======================')


// Interfaces

interface IAnimal {
  nome: string
  idade: number
  vivo: boolean

  nascer(): void
  crescer(): void
}

let doguinho: IAnimal = {
  nome: 'Toddy',
  idade: 0,
  vivo: false,

  nascer() {
    this.vivo = true
    return console.log(`O ${this.nome} nasceu`)
  },

  crescer() {
    this.idade++
    return console.log(`O ${this.nome} cresceu e está com ${this.idade} anos`)
  },

}

doguinho.nascer()
doguinho.crescer()
doguinho.crescer()
doguinho.crescer()
doguinho.crescer()

console.log('=======================')


// Classes

class NewAnimal implements IAnimal{

  readonly nome: string
  idade: number
  private _vivo: boolean

  get vivo(): boolean {
    return this._vivo
  }
 

  constructor(nome: string){
    this.nome = nome 
    this.idade = 0 
    this._vivo = false 
  }

  nascer() {
    this._vivo = true
    return console.log(`O ${this.nome} nasceu`)
  }

  crescer() {
    this.idade++
    return console.log(`O ${this.nome} cresceu e está com ${this.idade} anos`)
  }
}

let cachorriho = new NewAnimal('Luke')

cachorriho.nascer()
cachorriho.crescer()
cachorriho.crescer()
cachorriho.crescer()
cachorriho.crescer()

console.log('=======================')

// Namespace

namespace Terrestres {
  export class Caozinho extends NewAnimal{
    correr() {
      console.log(`O ${this.nome} correu`)
    }
  }

  export let caramelo = new Caozinho('Caramelo')
}

namespace Marinhos {
  export class Golfinho extends NewAnimal{
    nadar() {
      console.log(`O ${this.nome} nadou`)
    }
  }

  export let Flipper = new Golfinho('Flipper')

}

Terrestres.caramelo.correr()
Marinhos.Flipper.nadar()

console.log('=======================')

// Declaration
// Utilizado para declarar tipos em bibliotecas js

import calc from './calc.js'


console.log(calc.soma(10, 20))
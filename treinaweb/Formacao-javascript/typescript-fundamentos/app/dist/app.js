let nome;
let idade;
nome = "Jhonatan";
idade = 30;
console.log(`${nome} ${idade}`);
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 2));
//Arrays
let a = [];
a.push(1);
a.push(2);
a.push("Jhonatan");
console.log(a);
console.log('=======================');
let x = [1, 2, 3, "Hello"];
console.log(x);
let cachorro = {
    nome: "Luke",
    idade: 4
};
console.log(cachorro);
console.log('=======================');
// Enum
var prodStatus;
(function (prodStatus) {
    prodStatus[prodStatus["Ativo"] = 1] = "Ativo";
    prodStatus[prodStatus["Inativo"] = 2] = "Inativo";
    prodStatus[prodStatus["Indisponivel"] = 3] = "Indisponivel";
})(prodStatus || (prodStatus = {}));
function checarStatus(status) {
    switch (status) {
        case prodStatus.Ativo:
            console.log('Disponivel');
            break;
        case prodStatus.Inativo:
            console.log('Indisponível');
            break;
        case prodStatus.Indisponivel:
            console.log('Sem disponibilidade em estoque');
            break;
    }
}
checarStatus(3);
console.log('=======================');
let doguinho = {
    nome: 'Toddy',
    idade: 0,
    vivo: false,
    nascer() {
        this.vivo = true;
        return console.log(`O ${this.nome} nasceu`);
    },
    crescer() {
        this.idade++;
        return console.log(`O ${this.nome} cresceu e está com ${this.idade} anos`);
    },
};
doguinho.nascer();
doguinho.crescer();
doguinho.crescer();
doguinho.crescer();
doguinho.crescer();
console.log('=======================');
// Classes
class NewAnimal {
    get vivo() {
        return this._vivo;
    }
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this._vivo = false;
    }
    nascer() {
        this._vivo = true;
        return console.log(`O ${this.nome} nasceu`);
    }
    crescer() {
        this.idade++;
        return console.log(`O ${this.nome} cresceu e está com ${this.idade} anos`);
    }
}
let cachorriho = new NewAnimal('Luke');
cachorriho.nascer();
cachorriho.crescer();
cachorriho.crescer();
cachorriho.crescer();
cachorriho.crescer();
console.log('=======================');
// Namespace
var Terrestres;
(function (Terrestres) {
    class Caozinho extends NewAnimal {
        correr() {
            console.log(`O ${this.nome} correu`);
        }
    }
    Terrestres.Caozinho = Caozinho;
    Terrestres.caramelo = new Caozinho('Caramelo');
})(Terrestres || (Terrestres = {}));
var Marinhos;
(function (Marinhos) {
    class Golfinho extends NewAnimal {
        nadar() {
            console.log(`O ${this.nome} nadou`);
        }
    }
    Marinhos.Golfinho = Golfinho;
    Marinhos.Flipper = new Golfinho('Flipper');
})(Marinhos || (Marinhos = {}));
Terrestres.caramelo.correr();
Marinhos.Flipper.nadar();
console.log('=======================');
// Declaration
// Utilizado para declarar tipos em bibliotecas js
import calc from './calc.js';
console.log(calc.soma(10, 20));

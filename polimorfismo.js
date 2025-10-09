// class Animal {
//   falar() {
//     console.log("O animal faz um som");
//   }
// }

// class Cachorro extends Animal {
//   falar() {
//     console.log("O cachorro late");
//   }
// }

// class Gato extends Animal {
//   falar() {
//     console.log("O gato mia");
//   }
// }

// const animais = [new Animal(), new Cachorro(), new Gato()];

// animais.forEach(animal => animal.falar());




// class veiculo {
//     mover(){ 
//         console.log('O veiculo está em movimento')        
//     }
// }

// class carro extends veiculo { 
//     mover(){
//         console.log('O carro está dirigindo')
//     }
// }

// class moto extends veiculo{ 
//     mover(){
//         console.log('A moto está acelando')
//     }
// }

// const automovel = [new veiculo(), new carro(), new moto()]

// automovel.forEach(automovel => automovel.mover())

// console.log(automovel)



// EX 2 


class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    apresentar() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

class Aluno extends Pessoa {
    apresentar(){
        console.log(`Oi, sou aluno ${this.nome}`)
    }
}

class Professor extends Pessoa {
    apresentar() {
        console.log(`Bom dia professo ${this.nome}`)
    }
}

const pessoas = [new Pessoa('kaio'),new Aluno('Lucas'), new Professor('Felipe')]

pessoas.forEach(p => p.apresentar())

console.log(pessoas)
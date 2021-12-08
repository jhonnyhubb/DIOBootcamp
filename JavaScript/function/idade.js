function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}
const pessoa2 = {
    nome: "Carla",
    idade: 23,
}
const animal = {
    nome: "Fiona",
    idade: 3,
    raca: "Pug",
}

console.log(calculaIdade.call(pessoa1, 3));

console.log(calculaIdade.apply(animal, [6]));

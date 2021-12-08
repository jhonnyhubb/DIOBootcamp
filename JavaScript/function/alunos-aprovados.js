const ALUNOS = [
    {
        nome: "João",
        nota: 7.5,
        turma: "1B",
    },
    {
        nome: "Maria",
        nota: 5.4,
        turma: "1B",
    },
    {
        nome: "Sofia",
        nota: 8.7,
        turma: "2A",
    },
    {
        nome: "Miguel",
        nota: 3.7,
        turma: "1B",
    },
    {
        nome: "Pedro",
        nota: 9.7,
        turma: "2A",
    },
];

function alunosAprovados (array, media){
    let aprovados = [];

    for(let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(ALUNOS, 5))
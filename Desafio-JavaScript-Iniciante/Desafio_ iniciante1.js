/*
Faça um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Caso o valor não esteja em nenhum destes intervalos, deverá ser impressa a mensagem: “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.
*/
function gap() {

    let value = parseFloat(gets());
      

    const value0_25 = value >=0 && value <=25
    const value25_50 = value >25 && value <=50
    const value50_75 = value >50 && value <=75
    const value75_100 = value >75 && value <=100


        if ( value0_25 ) { console.log("Intervalo [0,25]" );

        }else if( value25_50 ){console.log("Intervalo (25,50]");

        }else if( value50_75 ){console.log("Intervalo (50,75]");

        }else if( value75_100 ){console.log("Intervalo (75,100]");        //complete o código nos espaços em branco

        }else{console.log("Fora de intervalo");

        }
}

gap()




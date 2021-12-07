let num1 = 32;
let num2 = 42;

function equalNumbers(num1, num2) {
    let equals;
    let comparative10;
    let comparative20;
    let sum;

    (num1 === num2) ? equals = "iguais" : equals = "não são iguais";

    sum = num1 + num2;
    if (sum < 10){
        comparative10 = "menor";
        comparative20 = "menor";
    } else if (sum < 20){
        comparative10 = "maior";
        comparative20 = "menor";
    }else if(sum > 20){
        comparative10 = "maior";
        comparative20 = "maior";
    }
    console.log("Os números " + num1 + " e " + num2 + " " + equals + ".Sua Soma é de " + sum + ", que é " + comparative10 + " que 10 e " + comparative20 + " que 20");
}

equalNumbers (num1, num2)
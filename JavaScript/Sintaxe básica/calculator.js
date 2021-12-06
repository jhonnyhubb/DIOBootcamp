//criando uma calculadora

function calculate(){
    const operation = prompt("choose your operation:\n 1 - Sum (+)\n 2 - subtract (-)\n 3 - multiply (x)\n 4 - divide (/)\n 5 - rest (%)\n 6 - potential (**)")
  
    if (!operation || operation > 6) {
        alert(`operation is invalide`);
        calculate();
    } else {        
        let n1 = Number(prompt("insert your first value:"));
        let n2 = Number(prompt("insert your second value:"));
        let result;

        if (!n1 || !n2){
            alert(`ERRO - parameters is invalide`);
            calculate();
        } else {

            function sum(){
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`);
                newOperation();
            }
            function subtract(){
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                newOperation();
            }
            function multiply(){
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                newOperation();
            }
            function divide(){
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                newOperation();
            }
            function rest(){
                result = n1 % n2;
                alert(`${n1} % ${n2} = ${result}`);
                newOperation();
            }
            function potential(){
                result = n1 ** n2;
                alert(`${n1} ** ${n2} = ${result}`);
                newOperation();
            }
        }

        function newOperation(){
            let option = prompt("do you want to do a new operation?\n 1 - yes\n 2 - no")
            if (option ==1){
                calculate();
            } else if (option == 2){
                alert(`bye`)
            }else{
                alert(`enter a valid option:`)
            }
        }
        
            
        if (operation == 1){
            sum();
        } else if (operation == 2){
            subtract();
        } else if (operation == 3){
            multiply();
        } else if (operation == 4){
            divide();
        } else if (operation == 5){
            rest();
        } else if (operation == 6){
            potential();
        }
        
    }
}

calculate()

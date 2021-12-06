var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
        if (currentNumber < 5){
                currentNumber = currentNumber + 1;
                currentNumberWrapper.innerHTML = currentNumber;
        }
}

function decrement() {
        if(currentNumber > -5){
                currentNumber = currentNumber - 1;
                currentNumberWrapper.innerHTML = currentNumber;
        }
}
add.addEventListener("click", increment);
decrease.addEventListener("click", decrement);




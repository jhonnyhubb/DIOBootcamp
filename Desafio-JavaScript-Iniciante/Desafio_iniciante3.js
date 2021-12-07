/*
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.
*/

function impar(){
  let X = parseInt(gets());
  if( X >=1 && X <= 1000){
    let impar = 0;
    let i = 0;
    
    do{
      impar = 2 * i + 1;
      console.log(impar);
      i++;
    } while ((impar +2) <= X );
  }else{
    console.log("insira um inteiro de 1 a 1000:")
  }
}

impar();

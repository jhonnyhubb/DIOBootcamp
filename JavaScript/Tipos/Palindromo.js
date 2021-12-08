//atividade 1 verificar se é um palindromo

//solução 

function checkPalindrome2(string) {
    if(!string) return "string inexistente";

    for( let i = 0; i < (string.length / 2); i++ ) {
        if (string[i] !== string[string.length -1 - i]){
            return false;
        }
    }

    return true;
}

let words = "abba"

console.log(checkPalindrome2(words));


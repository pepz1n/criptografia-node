const mensagemSecreta = "alura";

function cifraMensagem(mensagem, movimentos) {
    return mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0); //string.charCodeAt(index) retorna o valor unicode do  caractere
        return String.fromCharCode(codigoCaractere + movimentos) //String.fromCharCode(num) retorna a string do unicode
    }).join('');
}

function decifraMensagem(mensagem, movimentos) {
    return mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    }).join('');
}

const cripto = cifraMensagem(mensagemSecreta, 4);

console.log(cripto)

console.log(decifraMensagem(cripto, 4));

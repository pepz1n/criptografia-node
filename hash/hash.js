import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = criaHash(senha);
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.senha === criaHash(senha)) {
            console.log('Usuario autenticado');
        } else {
            console.log('Dados invalidos');
        }
    }
}

const bernardo = new Usuario('bernardo', '06112004bE@');

console.log(`Dados salvos : ${bernardo.nome}, ${bernardo.senha}`);

bernardo.autentica('bernardo', '06112004bE@'); //dados certos
bernardo.autentica('bernardo', '06112004be@'); //dados errados

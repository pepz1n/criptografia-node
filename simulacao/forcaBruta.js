import { createHash } from 'crypto'


class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = this.criaHash(senha);
    }
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.senha === this.criaHash(senha)) {
            return true;
        } else {
            return false;
        }
    }
}

const bernardo = new Usuario('bernardo', '1337');

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    if (bernardo.autentica('bernardo', senhaTeste.toString())) {
        console.log("Você foi logado");
        break
    }
}

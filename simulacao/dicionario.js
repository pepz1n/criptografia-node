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
        return nome === this.nome && this.senha === this.criaHash(senha);
    }
}

const bernardo = new Usuario('bernardo', 'senha123');

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

const dados = senhasComuns.map(senha => {
    return {
        usuario: 'bernardo',
        senha,
        status: bernardo.autentica('bernardo', senha),
    }
});

console.log(dados)


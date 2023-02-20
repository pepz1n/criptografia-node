import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');

    const hash = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${hash}`;
}

class Usuario {
    hash;
    nome;
    sal;
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64); // func scryptSync retonar um Buffer
            const hashReal = Buffer.from(this.hash, 'hex'); //retorna o Buffer a qual a mesma foi criada

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal); //compara os buffers de tempo
            if (hashesCorrespondem) {
                console.log(`boa`)
                return true;
            }
        }
        console.log('f');
        return false;
    }
}

const jm = new Usuario('bernardo zanetti', '06112004bE@')
jm.autentica('bernardo zanetti', '06112004bE@')

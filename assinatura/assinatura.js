import { generateKeyPairSync, createSign, createVerify } from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

let dados = 'Essa string vai ser assinada';

const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

//Caso altere o "dados" a verificaçã retornara false pois o documento foi assinado e após foi mudados;

// dados += "mudado"

// Envio do documento, assinatura e chave pública

const verficador = createVerify('rsa-sha256');
verficador.update(dados);

const ehVerificado = verficador.verify(publicKey, assinatura, 'hex');

console.log(ehVerificado)

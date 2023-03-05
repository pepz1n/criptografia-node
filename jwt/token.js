import jwt from 'jsonwebtoken'

const chave = 'algumacoisa'

const token = jwt.sign(
    {
        nome: 'bernardo',
        curso: 'node Segurança',
    },
    chave
);

const decodificado = jwt.verify(token, chave);

console.log(decodificado)

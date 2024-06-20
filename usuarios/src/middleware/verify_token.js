require("dotenv").config()
const jwt = require("jsonwebtoken")

const verificar = (req,res,next) => {
    // Criar uma constant para guardar o token
    // que o usuário irá enviar, no cabeçalho de
    // requisição
    const token_enviado = req.headers.token

    if (!token_enviado) {
        return res.status(401).send({ msg: " Não autenticado. Efetue o login" })
    }

    jwt.verify(token_enviado, process.env.JWT_KEY, (error, result) => {
        if (error) {
            return res.status(403).send({ msg: "Você não tem autorização para acessar este conteúdo" })
        }
        next()
    })
}

module.exports = verificar
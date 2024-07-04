require("dotenv").config()
const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {

    const tk = req.headers.token

    if (!tk) {
        return res.status(401).send({ msg: "Por favor faça o login" })
    }

    jwt.verify(tk, process.env.JWT_KEY, { expires: process.env.JWT_EXPIRES }, (error, dados) => {

        if (error) {
            return res.status(401).send({ msg: "Sessão finalizada. Efetue novamente o login" })
        }

        next()
    })
}

module.exports = verify
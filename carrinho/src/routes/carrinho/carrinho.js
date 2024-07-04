const express = require("express")
const router_carrinho = express.Router()
const data = require("../../database/config.js")

router_carrinho.get("/listar", (req, res) => {
    data.query("select * from carrinho",(error, dados)=> {
        if(error) {
            res.status(500).send({msg: "Erro ao carregar os dados"})
        } else {
            res.status(200).send({msg: "Ok", payload:dados})
        }
    })
})

module.exports = router_carrinho

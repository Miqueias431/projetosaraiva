const express = require("express")
const router_carrinho = express.Router()
const data = require("../../database/config.js")

router_carrinho.get("/listar/:id", (req,res) =>{
    data.query("SELECT foto.fotos1,titulo.nometitulo,titulo.autor,carrinho.quantidade, preco.precoatual,titulo.idtitulo,carrinho.total FROM saraivalivrodb.fotos foto INNER JOIN saraivalivrodb.titulos titulo ON foto.idfotos=titulo.idfoto INNER JOIN saraivacarrinhodb.carrinho carrinho ON titulo.idtitulo=carrinho.idproduto INNER JOIN saraivalivrodb.precos preco ON preco.idpreco = titulo.idpreco WHERE carrinho.idusuario=?;", req.params.id, (error, dados) => {
        if(error) {
            return res.status(500).send({msg: "Erro ao carregar os dados"})
        }
        res.status(200).send({msg: "Ok", payload:dados})
    })
})

router_carrinho.get("/sum/:id", (req, res) => {
    data.query("select sum(total) as 'ValoraPagar' from carrinho where idusuario=?", req.params.id,(error, dados) =>{
        if(error) {
            return res.status(500).send({msg: "Erro ao carregar os dados"})
        }
        res.status(200).send({msg: "Ok", payload:dados})
    })
})

router_carrinho.post("/inserir", (req, res) => {
    const dados = req.body
    data.query("insert into carrinho set ?", [dados], (error, dados) => {
        if(error) {
            res.status(500).send({msg: "Erro ao colocar no carrinho"})
        } else {
            res.status(200).send({msg: "Ok", payload:dados})
        }
    })
})

module.exports = router_carrinho

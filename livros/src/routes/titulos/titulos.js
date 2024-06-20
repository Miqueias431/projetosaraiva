const express = require("express")
const router_titulo = express.Router()
const data = require("../../database/config.js")


router_titulo.get("/listar", (req, res) => {
    data.query("select * from titulos", (error, result) => {
        if (error) {
            return res.status(500).send({msg: "Erro ao carregar os titulos" })
        }
        res.status(200).send({msg: "Ok", payload: result})
    })
})

router_titulo.get("/detalhes"), (req,res) => {
    data.query("select t.idtitulo,t.nometitulo,t.autor,t.sinopse,t.datacadastro,p.precoatual,p.precodesconto,f.fotos1,f.fotos2,f.fotos3,f.fotos4 from precos p inner join titulos t on p.idpreco = t.idpreco inner join fotos f on t.idfoto = f.idfotos", (error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao carregar os titulos"})
        }
        res.status(200).send({msg:"Ok", payload: result})
    })
}

router_titulo.post("/cadastrar"),(req,res) => {
    data.query("insert into titulos set ?", req.body, (error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao tentar cadastrar"})
        }
        res.status(201).send({msg:"Ok", payload: result})
    })
}

module.exports = router_titulo
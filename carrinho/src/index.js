require("dotenv").config()
const express = require("express")
const router_carrinho = require("./routes/carrinho/carrinho.js")
const cors = require ("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/v1/carrinho", router_carrinho)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor rodando em ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})

require("dotenv").config()
const express = require("express")
const router_titulo = require("./routes/titulos/titulos.js")

const app = express()
app.use(express.json())

app.use("/api/v1/livros", router_titulo)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor online em ${process.env.HOST_PORT}: ${process.env.HOST_PORT}`)
})
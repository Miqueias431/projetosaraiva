require("dotenv").config();

const express = require("express");
const router = require("./routes/users/users.js")
const router_personal = require("./routes/personaldata/personal_data.js")

const app = express();

app.use(express.json());
app.use("/api/v1/users/",router);
app.use("/api/v1/personaldata/",router_personal);

app.listen(process.env.HOST_PORT,()=>{
    console.log(`Servidor online em: 
    ${process.env.HOST_NAME}:
    ${process.env.HOST_PORT}`)
}
);


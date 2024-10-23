const express = require ('express')
const cors = require('cors')
const routes = require("./src/routes")

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(5000, ()=>{
    console.log('Servidor da academia rodando na porta 5000')
})
// responsavel pela funcionalidade do servidor
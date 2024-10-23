//dependencias pra funcionar
const express = require('express')
const router = express.Router();

const alunos = require('./controllers/alunos')
const estoque = require('./controllers/estoque')

//Rota(Endpoint) de teste
const teste = (req,res)=>{
    res.json("Api respondendo");
}

router.get('/',teste);
router.post('/alunos',alunos.create);
router.get('/alunos',alunos.read);
router.delete('/alunos/:id', alunos.deletar);
router.post('/estoque',estoque.create);
router.get('/estoque',estoque.read);

module.exports = router;
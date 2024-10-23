//chamando as dependencias
const con = require('../connect/connect').con;


const create = (req, res) => {
    let nomecompleto= req.body.nomecompleto;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let telefone= req.body.telefone;
    let Planodaacademia= req.body.Planodaacademia;
    let endereco= req.body.endereco;
    let bairro= req.body.bairro;
    let cidade= req.body.cidade;

    let query = 'INSERT INTO alunos (nomecompleto,cpf,rg,telefone,Planodaacademia,endereco,bairro,cidade)VALUES'
    query += `('${nomecompleto}','${cpf}','${rg}','${telefone}','${Planodaacademia}','${endereco}','${bairro}','${cidade}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const read = ( req,res)=>{
     con.query('SELECT * FROM alunos',(err,result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        } 
     })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM alunos WHERE  id = '${id}'`,(err, result) => {
        if(err){
            res.status(400).json(err).end();
        }else{
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    deletar
}
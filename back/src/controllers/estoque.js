//chamando as dependencias
const con = require('../connect/connect').con;


const create = (req, res) => {
    let nome= req.body.nome;
    let descricao = req.body.descricao;
    let funcionando = req.body.funcionando;

    let query = 'INSERT INTO estoque (nome,descricao,funcionando)VALUES'
    query += `('${nome}','${descricao}','${funcionando}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
const read = ( req,res)=>{
     con.query('SELECT * FROM estoque',(err,result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        } 
     })
}

// const deletar = (req, res) => {
//     let id = req.params.id;
//     con.query(`DELETE FROM estoque WHERE  id = '${id}'`,(err, result) => {
//         if(err){
//             res.status(400).json(err).end();
//         }else{
//             res.status(201).json(result)
//         }
//     })
// }

module.exports = {
    create,
    read
}
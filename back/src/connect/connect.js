//chamando as dependencias
const mysql = require('mysql')

//configuração da conexão com o banco
const con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'projetoacademia'
});

module.exports = {con}
const Sequelize = require('sequelize');

const sequelize = new Sequelize('usuario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizado com sucesso!")
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizado!");
});

module.exports = sequelize;
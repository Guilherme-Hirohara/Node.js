const sequelize = require('./config/database'); 
const Usuario = require('./model/usuario.model'); 
const Postagem = require('./model/postagem.model'); 

async function main(){
    try{
        await sequelize.authenticate(); 
        console.log("Sucesso ao conectar com o banco!!\n"); 

        await sequelize.sync(); 
        console.log("Tabelas sincronizadas!!\n"); 

        const usuario = Usuario.create({
            nome: 'Guilherme', 
            sobrenome: 'Hirohara', 
            idade: 20
        }); 

        const postagem = Postagem.create({
            titulo: 'Titulo 1', 
            descricao: 'dksabndklnsakldn sakdnklasn kldnklsan kldnskal ndklsa'
        }); 
    }
    catch(e){
        console.log('Ocorreu algum erro no processo!!\nMensagem: ' + e.message); 
    }
}

main(); 
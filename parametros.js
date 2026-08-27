const express = require("express"); 
const app = express();  
                    //a constante evita que sobrescreva a variável 

                    //req é a requisição do seu app 
                    //e res é a respostas
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app"); 
})

app.get("/sobre", function(req, res){
    res.send("Minha página sobre"); 
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog"); 
})

//Os dois pontos serve para colocar um parâmetro 
//req -> serve para receber dados de uma requisição
//função send pode ser realizado uma vez na função
app.get("/cargo/:id/:cargo", function(req, res){
    res.send(`<p>Id: ${req.params.id}</p><p>Cargo: ${req.params.cargo}</p>`);  
})


                    //função de callback é toda vez que executada é disparado um evento
app.listen(8081, function(){
    console.log("Servidor está aberto")
});   //localhost:8081

                    //não pode ter nada abaixo dela pois n vai funcionar
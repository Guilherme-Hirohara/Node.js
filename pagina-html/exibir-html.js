const express = require('express'); 
const app = express(); 

app.get("/", function(req, res)
{
    res.sendFile(__dirname + '/index.html') //Está variavel __dirname mostra o caminho que você se encontra
}
)

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/sobre.html"); 
})

app.listen(8081, () => {
    console.log("Servidor Aberto!!"); 
})
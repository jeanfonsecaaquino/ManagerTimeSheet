var app = require('./config')();

app.listen(8080, function(){
    console.log("Servidor iniciado utilizando o Restfy");
});
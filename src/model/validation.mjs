sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso')
}).catch(function(err){ 
    console.log('Erro ao realizar  a conexão com o DB: ' + err)
})
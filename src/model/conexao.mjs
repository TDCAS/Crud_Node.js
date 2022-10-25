import  Sequelize  from "sequelize"



function Conexão(){
    
    this.validar = function(valida){
        if(valida == true ){

            this.sequelize = new Sequelize('db_sur', 'allan', 'root',{
            host: 'localhost',
            dialect: 'mysql'},
            console.log("conexao valida") )

        }else {
        console.log("conexão nao validada")
        }}
}

let cox =  new Conexão




    


  
    

    
    //Cria tabela com Sequelize
    //table.sync({force: true})



export default {cox,Sequelize}


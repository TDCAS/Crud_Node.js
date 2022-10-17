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

let cox =  new Conexão()



function Tables(){
    cox.validar(true)
    this.tb_cliente = cox.sequelize.define('client', {
    cl_name: {
        type: Sequelize.STRING
    },
    cl_email: {
        type: Sequelize.STRING
    },
    cl_senha: {
        type: Sequelize.STRING
    }},
    console.log("dados insertados"))
    cox.validar(false)
}

    

  
    

    
    //Cria tabela com Sequelize
    //table.sync({force: true})

let table  = new Tables()
export default  {table,Sequelize}


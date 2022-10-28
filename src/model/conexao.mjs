import  Sequelize  from "sequelize"



function Conexão(){
    
    this.validar = function(){
        

        const sequelize = new Sequelize('db_sur', 'allan', 'root',{
        host: 'localhost',
        dialect: 'mysql'},
        console.log("conexao valida") )

            return sequelize
        }
    
}

let cox =  new Conexão




    


  
    

    
    //Cria tabela com Sequelize
    //table.sync({force: true})



export default cox


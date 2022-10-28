import  Sequelize  from "sequelize"
import db from "./conexao.mjs"







function  tables(){
   
   let tb_cliente =  
            db.validar().define('client', {
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
        
        return tb_cliente
    
    }

    
        
    function Query(){

        this.db_clinte = async function(name,email,senha){
            
            await tables().create({
            cl_name: name,
            cl_email: email,
            cl_senha: senha,
        },
        console.log("dados cadastrados") 
        )
       
    }

    this.select_cliete = async (name,email,senha) => {
        await db.validar().sync()
    
          const pegarcadastro = await tables().findAll({
            where: {
                cl_name: "oloko"
            }
          });
          console.log(pegarcadastro)
      };


}


const create = new Query()

export default  create






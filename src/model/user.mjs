
import db from "./conexao.mjs"




function tables(){
    db.cox.validar(true)
    let tb_cliente = 
            db.cox.sequelize.define('client', {
                cl_name: {
                    type: db.Sequelize.STRING
                },
                cl_email: {
                    type: db.Sequelize.STRING
                },
                cl_senha: {
                    type: db.Sequelize.STRING
        }},
        console.log("dados insertados"))
        db.cox.validar(false)
        return tb_cliente    
    
    }

    
        
    function Query(){

        this.db_clinte = function(name,email,senha){tables().create({
            cl_name: name,
            cl_email: email,
            cl_senha: senha,
        },
        console.log("dados cadastrados") 
        )
    }}


const create = new Query()

    

export default  create


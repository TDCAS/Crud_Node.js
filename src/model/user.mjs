
import db from "./conexao.mjs"
    function Query(){
        this.db_clinte = function(name,email,senha){db.table.tb_cliente.create({
            cl_name: name,
            cl_email: email,
            cl_senha: senha,
        },
        console.log("dados cadastrados") 
        )
    }}


const create = new Query()

    

export default  create


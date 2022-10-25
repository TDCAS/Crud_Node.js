import express  from "express"
import user from "./model/user.mjs"
import bodyParser from "body-parser"

const app  =  express()



app.use(bodyParser.urlencoded({ extendd: false}))

app.use(bodyParser.json())

app.get("/",function(req,res){
    res.sendFile("/users/Computador/Desktop/Novapasta/code/tutoriais/Node/src/view/init.html")
})

app.post("/cadastrocomsucesso",function(req,res){
    user.db_clinte(+req.body.cl_name,req.body.cl_email,req.body.cl_senha)
    let senha = "*".repeat((req.body.cl_senha).length)
    res.send("Nome: "+req.body.cl_name+"<hr>Email:"+req.body.cl_email+"<hr>Senha:"+senha)
  
})

app.listen(3000)
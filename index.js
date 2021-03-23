require("dotenv").config();
//const http = require("http");
const express =require ("express");
const  app = express();
const port =process.env.PORT ||3000;

//forma con express (abajo esta con node puro)


app.use(express.static(__dirname+"/public"));// Para usar los archivos de la carpeta public

app.get("/", function(req,res){
    res.send("Hola Mundo")
})
app.get("/usuarios",function(req,res){
    res.send("Usuario:Mauro")
})

app.post("/",function(req,res){
    res.send("POST del path /")
})
app.listen(port,()=>{
    console.log(`Serverstarted - Port ${port}`);
})






//creamos servidor
/*
http.createServer Rrecibe una funcion callback que tiene 2 paramtros ( request que son la peticiones al servidor y response que son las repsuestas )
con .listen se le dice a que puerto va a escuchar la app.
*/
/*

FORMA NODE PURO
http.createServer((req,res)=>{


//console.log(req);

res.write("hola mundo");
res.end();

}).listen(3000,()=>{
    console.log("puerto abierto");
});


*/
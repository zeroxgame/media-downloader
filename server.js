const express=require("express");
const app=express();


app.use(express.json());

app.use(express.static(__dirname));


app.get("/",(req,res)=>{

res.sendFile(__dirname+"/index.html");

});


app.post("/download",(req,res)=>{


let url=req.body.url;

let type=req.body.type;



if(!url){

return res.json({

message:"No URL found"

});

}



if(type==="mp3"){


res.json({

message:
"MP3 request received: "+url

});


}



else{


res.json({

message:
"Video request received: "+url

});


}



});



app.listen(3000,()=>{

console.log(
"Server running http://localhost:3000"
);

});
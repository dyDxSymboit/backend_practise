const express = require("express");
const format = require('date-format')

const app = express();

const PORT =  process.env.PORT||4000;

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Hello from Courtney</h1>')
});

app.get("/api/v1/instagram",(req,res) => {
    const instaSocial = {
        username: "courtney",
        followers: 66,
        follows:70,
        date : format.asString("dd[MM]-hh:mm:ss",new Date())
    }

    res.status(200).json({instaSocial})
})

 app.get("/api/v1/facebook",(req,res) => {
    const instaSocial = {
        username:"Panashe",
        followers: 109,
        follows:790,
        date : format.asString("dd[MM]-hh:mm:ss",new Date())
    }
    res.status(200).json({instaSocial})
})

app.get("/api/v1/linkedin",(req,res) => {
    const instaSocial = {
        username: "Nyasha",
        followers: 60,
        follows:20,
        date : format.asString("dd[MM]-hh:mm:ss",new Date())
    }
    res.status(200).json({instaSocial})
})

app.get("/api/v1/:token",(req,res)=> {
    console.log(req.params.token);
    res.status(200).json({param:req.params.token});
});

app.listen(PORT,()=>{
    console.log(`server is runing at ${PORT}`);
});

const express=require('express');

const app=express();

const connection=require('./database/connection');

const router=require('./routes/routes');


app.use(express.urlencoded({extended:false}));

app.use(router);



app.listen(4000,()=>{
    console.log("Server is running")
});

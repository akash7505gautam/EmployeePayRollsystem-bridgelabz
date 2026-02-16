const express=require('express');
const readFile=require('./modules/fileHandler');
const app =express();
app.get('/',(req,res)=>{
    console.log(readFile());
})
const port=3000;
app.listen(port,()=>
{
    console.log(`server running on ${port}`);
})
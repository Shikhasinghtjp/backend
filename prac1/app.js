const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/create',async (req,res)=>{
//    let createduser = await userModel.create({            //async code
//         name:"Vijay",
//         email:"a@b.com",
//         username:"vijay",
//         password:"1234"
//     })

//     res.send(createduser);
// })

app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({            //async code
         name:"Harshita",
         email:"abc@d.com",
         username:"harshita",
         password:"01457"
     })
 
     res.send(createduser);
 })

 app.get('/read',async (req,res)=>{
    let readuser = await userModel.find();  
     //find returns array even if single no data is present
    //findOne returns null if no data is present, returns object if data is present
    res.send(readuser);
 })

app.get('/update',async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({email:"a@b.com"},{name:"Vijay Kumar"},{new:true})
     res.send(updateduser);
 })

 app.get('/delete',async (req,res)=>{
    let users = await userModel.findOneAndDelete({email:"a@b.com"},{name:"Vijay"},{new:true})
     res.send(users);
 })


app.listen(3000);
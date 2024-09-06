//1.importing express
const express = require('express')
require("./connection")
var EmployeeModel = require("./model/employee")

var cors = require("cors")
//2.initialisation
const app = new express()
//mid
app.use(express.json())
app.use(cors())
//3.api creation
app.get('/', (req,res) => {
    res.send("message from the server")
})
app.get('/trial', (req,res) => {
    res.send(" trial message from the server")
})
//add api
app.post('/add',async(req,res) => {
    try {
       await EmployeeModel(req.body).save();
       res.send({message:"data added!!"})
    }
    catch (error) {
console.log("error")
        
    }
})
//view
app.get('/view',async(req,res) => {
    try {
       var data = await EmployeeModel.find();
       res.send(data)
    }
    catch (error) {
console.log("error")
        
    }
})
//delete
app.delete("/remove/:id",async(req,res) => {
    try {
        await EmployeeModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted!!"})
    }

 catch (error) {
        console.log("error");
 }
   })
   //update
   app.put('/edit/:id',async(req,res) => {
    try {
      var data= await EmployeeModel.findByIdAndUpdate(req.params.id,req.body)
       res.send({message:"data updated!!",data})
    }
    catch (error) {
console.log("error")
        
    }
})
    //4.port
app.listen(3004, () => {
    console.log("port is running");

})

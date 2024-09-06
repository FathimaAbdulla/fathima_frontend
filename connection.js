var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://fathimasadikh888:fathima@cluster0.ps7ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    console.log(" db connected")
})
.catch((err)=>{
    console.log(err)
})

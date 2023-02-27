const mongoose=require('mongoose')

const singnInSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }

})

mongoose.model('USER',singnInSchema)
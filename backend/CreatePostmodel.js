const mongoose=require('mongoose')

const recipeSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    recipeDirections:{
        type:String,
        required:true
    }

},{timestamps:true})

mongoose.model('RECIPE',recipeSchema)
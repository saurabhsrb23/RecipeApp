const express = require('express')
const app = express()
const port = 9000 || process.env.port
const cors=require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const auth=require("./Auth")
require('./singinModel')
require('./CreatePostmodel')
app.use(express.json())

const USER = mongoose.model("USER")
const RECIPE=mongoose.model("RECIPE")


require('./connectionDB')

app.use(cors())

// app.use(require('./route'))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signup', async (req, res) => {
    try{

        const { email, password, confirmPassword } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).json({
            message: "Password not matched"
        })
    }
    const persentUser = await USER.findOne({ email })

    if (persentUser) {
        return res.status(400).json({
                message: 'User already exist'
            })
        }

    bcrypt.hash(password,10,async function(err,hash){
if(err){
    return res.status(500).json({
        status:"failed",
        message:err.message
    })
}
const dataafterhash=await USER.create({
    email,
    password:hash
})
res.status(201).json({
    message:"registered sucessfully"
})

    })
}catch(err){
    res.status(400).json({
        staus:"failed",
        message:err.message
    })

}

})

app.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await USER.findOne({email})

        if(!user){
            return res.status(200).json({
                status:"failed",
                message:"user should register"
            })
        }

        bcrypt.compare(password,user.password, function(err,result){
            if(err){
                return res.status(500).json({
                    status:"failed",
                    message:err.message
                })
            }
            if(result){
                // const token =jwt.sign({
                //     exp:Math.floor(Date.now()/1000)+(60*60), //is 1hrs vailed
                //     data:user._id,
                //     token
                // })
                res.status(201).json({
                    message:"login sucessfully"
                })

            }else{
                res.status(400).json({
                    status:"failed",
                    message:"invalid credincials"
                })
            }
        })
       

    }catch(err){
        res.status(400).json({
            staus:"failed",
            message:e.message
        })

    }
})

app.post("/createpost",(req,res)=>{
    const {title,author,image,ingredients,recipeDirections}=req.body
    if(!title || !author || !image || !ingredients || !recipeDirections){
        return res.status(422).json({error:"please fill all field"})
    }
    res.json("ok")
    
    const Recipe =new RECIPE({
        title,
        author,
        Image :image,
        ingredients,
        recipeDirections
    })

    Recipe.save().then((result)=>{
        return res.json({Recipe:result})
    }).catch(err=>console.log(err))
})
app.get('/all',(req,res)=>{
    RECIPE.find().sort({createdAt:-1}).then(recipe=>res.json(recipe)).catch(err=>console.log(err))
})


app.post("/verifying",(req,res,next)=>{
    auth
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
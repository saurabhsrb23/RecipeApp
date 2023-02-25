const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const USER = mongoose.model("USER")


router.post('/sigup', async (req, res) => {
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

module.export=router
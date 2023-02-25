const mongoose=require('mongoose')

require('dotenv').config();

const MongoURL=process.env.MongoURL

mongoose.set('strictQuery',true)

mongoose.connect(MongoURL)

mongoose.connection.on("connected",()=> console.log('database Connected'))
mongoose.connection.on("error",()=> console.log('Error during ConnectionDB'))
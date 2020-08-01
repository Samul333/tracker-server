const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercise')
const userRouter = require('./routes/user')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAST_URI;

mongoose.connect('mongodb+srv://Samul:killinginthenameof@cluster0.h638k.mongodb.net/trackerapp?retryWrites=true&w=majority',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("The Database has been connected")
})

app.use('/exercise',exerciseRouter)
app.use('/user',userRouter)



app.listen(port,()=>{
    console.log('The server has started')
})
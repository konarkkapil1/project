const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
//bringin in route for data api
const data = require("./routes/api/data");

process.env.NODE_ENV = 'production';

//bodyparser config
app.use(bodyparser.urlencoded({extended:false}));
//connection to database
const db = require('./setup/myurl').mongoURL;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("mongoose connected");
    })
    .catch( err => console.log(err))

    
// testing route for get
app.get('/',(req,res)=>{
    res.send("app runnning");
});

//actual route for data api
app.use('/api/data',data);

const PORT = process.env.PORT || 80;
app.listen( PORT,()=>{
    console.log(`app running on port ${PORT}`);
});
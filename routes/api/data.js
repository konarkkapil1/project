const express = require('express');
const router = express.Router();
const schema = require('../../models/Datadb');

router.get('/',(req,res)=>{
    res.send("data api directory");
});

//@type     GET
//@route    /api/data/send
//@desc     route to send data to api
//@access   PUBLIC
router.get('/send',(req,res)=>{
    const newdata = new schema({
        temprature: req.body.temprature,
        bpm: req.body.bpm,
        fall: req.body.fall,
        coords: req.body.coords
    });
    newdata.save()
        .then( data => res.json(data))
        .catch(err=>console.log(err))
});

//@type     POST
//@route    /api/data/get
//@desc     route to get data from api
//@access   PUBLIC
router.post('/get',(req,res)=>{
    schema.find({}).limit(10)
        .then( data => {
            res.json({data});
        })
        .catch(err => console.log(err));
});


module.exports = router;
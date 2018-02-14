//import { LOADIPHLPAPI } from 'dns';

const express = require('express');
const bodyParser = require('body-parser')

const {mongoose}=require('./db/mongoose')
const{Charter}= require('./models/charter');
const {ObjectID} = require('mongodb')


const app = express();

app.use(bodyParser.json())

app.post('/charters',(req, res)=>{
    console.log(req.body)
    var charter = new Charter({
        model: req.body.model
    });

    charter.save().then((doc)=>{
       res.status(400).send(doc)
    },(e)=>{
        console.log(e);
    })
})

app.get('/charters', (req, res )=>{
    Charter.find().then((charters)=>{
        res.send({charters});
    },(e)=>{
        res.status(400).send(e);
    })
})

app.get('/charters/:id', (req, res)=>{
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Charter.findById(id).then((charter)=>{
        if(!charter){
            return res.status(404).send();
        }
        res.send({charter})
    }).catch((e)=>{
        res.status(400).send();
    })
},(e)=>{

})
app.listen(3000, ()=>{
    console.log ('Server started on 3000')
})

module.exports = {
    app:app
}


const {mongoose } = require('./../server/db/mongoose');
const {Charter} = require('./../server/models/charter');
const {ObjectID} = require('mongodb');


const id = '5a81ff75902595301ee573c';

    if(!ObjectID.isValid(id)){
        console.log('is not valid ')
    }

// Charter.find({_id:id}).then((charters)=>{
//    console.log('charters : ', charters)
// });

// Charter.findOne({_id:id}).then((charter)=>{
//     console.log('charter : ', charter)
//  });

 Charter.findById(id).then((charter)=>{
     if(!charter){
         return console.log('Not found')
     }
 }).catch((e)=>{
     console.log(e);
 })
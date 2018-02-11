//const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/charters', (err, db) =>{
    if(err){
        console.log('Unable to connect to db')
    }

    console.log('Connected to mongodb')


    // db.collection('yacht_charters').find({
    //     _id : new ObjectID('5a80259e147b5a28840fdc5c')
    // }).toArray().then((docs)=>{
    //     console.log('YACHTS:')
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch yachts', err);
    // });
      
    db.collection('yacht_charters').find().count().then((count)=>{
        console.log(`YACHTS count:${count}`)
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch yachts', err);
    });


    //db.close();
});
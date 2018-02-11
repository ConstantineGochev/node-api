const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/charters', (err, db) =>{
    if(err){
        console.log('Unable to connect to db')
    }

    console.log('Connected to mongodb')

    // db.collection('yacht_charters').insertOne({
    //     name: 'Danae',
    //     length: '40'

    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert charter', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2))
    // })

    db.collection('yacht_forsale').insertOne({
        name: 'Danae',
        length: '40'

    },(err, result)=>{
        if(err){
            return console.log('Unable to insert charter', err)
        }

        console.log(JSON.stringify(result.ops, undefined,2))
    })
    db.close();
});
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/charters', (err, db) =>{
    if(err){
        console.log('Unable to connect to db')
    }

    console.log('Connected to mongodb')


   db.collection('yacht_charters').findOneAndUpdate({
       _id: new ObjectID('5a80259e147b5a28840fdc5c')
   },{
       $set:{
           name: 'Lagoon'
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result)
   })


    //db.close();
});
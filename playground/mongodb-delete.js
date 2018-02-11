const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/charters', (err, db) =>{
    if(err){
        console.log('Unable to connect to db')
    }

    console.log('Connected to mongodb')


   //delete many
//    db.collection('yacht_charters').deleteMany({
//        name: 'haha'
//    }).then((result)=>{
//           console.log(result)
//    })

   //delete the first  one
   db.collection('yacht_charters').deleteOne({
           name: 'haha'
       }).then((result)=>{
              console.log(result)
       })

   //findone and delete one and returns it
   db.collection('yacht_charters').findOneAndDelete({
    name: 'haha'
}).then((result)=>{
       console.log(result)
})


    //db.close();
});
if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: 'mongodb://admin:admin@ds119018.mlab.com:19018/odysseyyachting'
    }
}else{
    module.exports = {
        mongoURI: 'mongodb://localhost/root'
    }
}
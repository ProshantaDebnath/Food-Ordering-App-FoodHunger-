const mongoose = require('mongoose');

var mongoURL = ''

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

 var db = mongoose.connection

 db.on('connected', ()=>{
     console.log('MongoDb connection successfull');
 })

 db.on('error', ()=>{
     console.log('connection fails'); 
 })

 module.exports = mongoose;
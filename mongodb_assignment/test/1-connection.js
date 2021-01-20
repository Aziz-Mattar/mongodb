const { before } = require('mocha');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


before(function(done){
    mongoose.connect('mongodb://localhost/aziz',{NewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});

    mongoose.connection.once('open',function(){
        console.log("connection success");
        done();
    }).on('error',function(error){
        console.log("connection fail : ".error);
    });
});

before(function(done){
    //Drop Collection
    mongoose.connection.collections.movies.drop(function(){
        done();
    });
});
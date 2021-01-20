const mongoose = require('mongoose');
// connent to mongoose
//ES6 Promise
mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://localhost/testaroo',{NewUrlParser: true,useUnifiedTopology: true});

    mongoose.connection.once('open',function(){
        console.log("connection success");
        done();
    }).on('error',function(error){
        console.log("connection fail : ".error);
    });


});
beforeEach(function(done){
    //Drop Collection
    mongoose.connection.collections.realmadrids.drop(function(){
        done();
    });
});
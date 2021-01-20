const assert = require('assert');
const Movie = require('../models/MoviesModels');       
describe('update', function(){      
    // it('test' ,function(done){       
    //     const filter = { name: 'The Godfather' };
    //     const update = { achievements : 'Movie Master' };
    //     Movie.findOneAndUpdate(filter,update,{new: true}); 
    //     done();               
    // }); 
    it('updates one record from the data base',function(done){
        Movie.findOneAndUpdate({name:"The Godfather"},{$set:{achievements:"Movie Master"}}).then(function(result){            
                assert(result.name==="Movie Master");                                                           
        });
        done();  
     }); 
});
//Movie.update()
//Movie().update()
//Movie.findOneAndUpdate()


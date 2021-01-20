const assert = require('assert');
const Movie = require('../models/MoviesModels');
describe('Return All', function(){    
    it('Return all the movies',function(done){
        Movie.find({}).then(function(result){            
            result.forEach(element => {
                console.log("<Name:",element.name,"> <Year:",element.year ,"> <Genre:", element.genre ,"> <Rating:", element.rating ,">");
            });       
            done();                            
        });       
    });
});
 


const assert = require('assert');
const Movie = require('../models/MoviesModels');
describe('Return', function(){    
    it('Return the 3 highest rated movies',function(done){
        Movie.find({}).sort({"rating":-1}).limit(3).then(function(result){
            result.forEach(element => {
                console.log("<Name:",element.name,"> <Year:",element.year ,"> <Genre:", element.genre ,"> <Rating:", element.rating ,">");
            });   
            done();               
            });                
        });                
});
 


const assert = require('assert');
const Movie = require('../models/MoviesModels');
describe('Return', function(){    
    it('Return all the Movie that have the Movie Master achievement',function(done){
        Movie.find({achievements: "Movie Master"}).then(function(result){
            result.forEach(element => {
                console.log("<Name:",element.name,"> <Year:",element.year ,"> <Genre:", element.genre ,"> <Rating:", element.rating ,"> <Achievement:", element.achievements,">");
            });   
            done();                
            }); 
              
        });                
});
 

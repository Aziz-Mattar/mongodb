const assert = require('assert');
const Movie = require('../models/MoviesModels');
describe('Nesting', function(){
    var movie;
    it('Create a new movie and Nest the Actors record',function(done){        
         movie = new Movie({
            name:"Tenet",
            year:2020,
            genre: "Tenet",
            rating:76,
            actors:[ 
                { name : "John David Washington", age: 36},
                { name : "Robert Pattinson", age: 34},
                { name : "Elizabeth Debicki", age: 30},
            ],
        });
        movie.save().then(function(){
            assert(movie.actors.length === 3 );
            done();
        });
    });
});
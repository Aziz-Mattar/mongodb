const assert = require('assert');
const { disconnect } = require('process');
const Movie = require('../models/MoviesModels');
describe('Add 5 Movies to the database.', function(){
    it('Add first movie to the data base',function(done){
        
        var movie = new Movie({
            name:"The Shawshank Redemption",
            year:1994,
            genre: "Drama",
            rating:93,
        });
        movie.save().then(function(){
            assert(movie.isNew===false);
            done();
        });
    });
    it('Add second movie to the data base',function(done){
        
        var movie = new Movie({
            name:"The Godfather",
            year:1972,
            genre: "Crime, Drama",
            rating:92,
        });
        movie.save().then(function(){
            assert(movie.isNew===false);
            done();
        });
    });
    it('Add third movie to the data base',function(done){
        
        var movie = new Movie({
            name:"The Godfather: Part II",
            year:1974,
            genre: "Crime, Drama",
            rating:90,
        });
        movie.save().then(function(){
            assert(movie.isNew===false);
            done();
        });
    });
    it('Add fourth movie to the data base',function(done){
        
        var movie = new Movie({
            name:"The Dark Knight",
            year:2008,
            genre: "Action, Crime, Drama",
            rating:85,
        });
        movie.save().then(function(){
            assert(movie.isNew===false);
            done();
        });
    });
    it('Add fifth moive to the data base',function(done){
        
        var movie = new Movie({
            name:"Inception",
            year:2010,
            genre: "Action, Adventure, Sci-Fi",
            rating:88,
        });
        movie.save().then(function(){
            assert(movie.isNew===false);
            done();
        });
    });
});

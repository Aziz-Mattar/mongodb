const mongoose = require('mongoose');
const schema = mongoose.Schema;
// create Schema and model
const ActorSchema = new mongoose.Schema({
    name:String,
    age:Number
}); 
const MovieSchema = new mongoose.Schema({
    name:String,
    year:Number,
    genre:String,
    rating:Number,
    actors:[ActorSchema],
    achievements:String
});
const Movie = mongoose.model('Movies',MovieSchema);

module.exports = Movie;

//var myPlayers = new RealMadrid({});


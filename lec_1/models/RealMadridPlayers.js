const mongoose = require('mongoose');
const schema = mongoose.Schema;
// create Schema and model
const RealMadridSchema = new mongoose.Schema({
    name:String,
    age:Number
});
const RealMadridPlayer = mongoose.model('realMadrid',RealMadridSchema);
module.exports = RealMadridPlayer;
//var myPlayers = new RealMadrid({});
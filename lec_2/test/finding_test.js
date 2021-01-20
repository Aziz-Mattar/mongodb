const assert = require('assert');
const RealMadridPlayer = require('../models/RealMadridPlayers');
describe('finding a record', function(){
    var player;
    beforeEach(function(done){
        //assert(2+3===5)
        player = new RealMadridPlayer({
            name:"Ozil"
        });
        player.save().then(function(){            
            done();
        });
    });
    it('find one record from the data base',function(done){
        RealMadridPlayer.findOne({name:"Ozil"}).then(function(result){
            assert(result.name==="Ozil");
            done();
        });
    });
    it('find one record from the data base by id',function(done){
        RealMadridPlayer.findOne({_id:player._id}).then(function(result){
            assert(toString(result._id)===toString(player._id));
            done();
        });
    });
});
 

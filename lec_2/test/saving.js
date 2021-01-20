const assert = require('assert');
const { disconnect } = require('process');
const RealMadridPlayer = require('../models/RealMadridPlayers');
describe('Saving a record', function(){
    it('Saves a recprd to a data base',function(done){
        //assert(2+3===5)
        var player = new RealMadridPlayer({
            name:"Ozil"
        });
        player.save().then(function(){
            assert(player.isNew===false);
            done();
        });
    });
});

RealMadridPlayer.find()
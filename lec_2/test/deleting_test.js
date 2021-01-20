const assert = require('assert');
const RealMadridPlayer = require('../models/RealMadridPlayers');
describe('deleting a record', function(){
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
    it('delete one record from the data base',function(done){
       RealMadridPlayer.findOneAndRemove({name:"Ozil"}).then(function(){
           RealMadridPlayer.findOne({name:"Ozil"}).then(function(result){
               assert(result === null);
               done();
           })
       }); 
    });    
});
 
//player.remove()
//RealMadridPlayer.findOneAndRemove()
//RealMadridPlayer.remove()

//player.update()
//RealMadridPlayer().update()
//RealMadridPlayer.findOneAndUpdate()
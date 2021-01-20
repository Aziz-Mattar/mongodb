const assert = require('assert');
const RealMadridPlayer = require('../models/RealMadridPlayers');
describe('updating a record', function(){
    var player;
    beforeEach(function(done){
        //assert(2+3===5)
        player = new RealMadridPlayer({
            name:"Ozil",
            age :30
        });
        player.save().then(function(){            
            done();
        });
    });
    it('updates one record from the data base',function(done){
       RealMadridPlayer.findByIdAndUpdate({name:"Ozil"},{name:"Kross"}).then(function(){
           RealMadridPlayer.findOne({_id:player._id}).then(function(result){
               assert(result.name==="Kross");   
                          
           }); 
           done();          
       });
    });  
    it('Increments the age from the data base',function(done){
        RealMadridPlayer.update({},{$inc:{age:1}}).then(function(){
            RealMadridPlayer.findOne({name:"Kross"}).then(function(result){
                assert(result.age === 31);
               
            });
            done();
        });
     });   
});
 
//player.remove()
//RealMadridPlayer.findOneAndRemove()
//RealMadridPlayer.remove()

//player.update()
//RealMadridPlayer().update()
//RealMadridPlayer.findOneAndUpdate()
'use strict';

function Pellet(gridSize) {
    var pos = {x: 0, y: 0};
    this.position = function(){
        return pos;
    };
    this.spawn = function(objects) {
        do {
            pos.x = Math.floor(Math.random()*gridSize.x);
            pos.y = Math.floor(Math.random()*gridSize.y);
        } while(objects.some(function(o){
            return o.contains(pos);
        }));
    };

	this.draw = function(ctx, pixelSize) {
		ctx.save();
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(pos.x*pixelSize.x, pos.y*pixelSize.y, pixelSize.x, pixelSize.y);
		ctx.restore();
	};

    this.contains = function(p){
        return(pos.x === p.x && pos.y === p.y);
    };

}

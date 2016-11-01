'use strict';

function Wall(c1, c2, color){
    var x = Math.min(c1.x, c2.x);
    var w = Math.abs(c1.x-c2.x+1);
    var y = Math.min(c1.y, c2.y);
    var h = Math.abs(c1.y-c2.y+1);

    this.contains = function(p){
        return(p.x >= x && p.x < x+w && p.y >= y && p.y < y+h)
    };

    this.draw = function(ctx){
        ctx.save();
        ctx.fillStyle=color;
        ctx.fillRect(x*pixelSize.x, y*pixelSize.y, w*pixelSize.x, h*pixelSize.y);
        ctx.restore();
    }
}

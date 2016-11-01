'use strict';

function Snake(x0, y0) {

    var points = [{x: x0, y: y0}];
	var direction = {x: 0, y: -1};

	this.move = function(eat) {
		points.unshift({x: points[0].x+direction.x, y: points[0].y+direction.y});
        if(!eat){
            points.pop();
        }
	};

    this.nextPoint = function(){
        return {x: points[0].x+direction.x, y: points[0].y+direction.y};
    };

    this.contains = function(p){
        var i = 0;
        while(i < points.length){
            if(points[i].x === p.x && points[i].y === p.y){
                return true;
            }
            i+=1;
        }
        return false;
    };

    this.setDirection = function(d) {
        if(d.x === -(direction.x)&& d.y === -(direction.y)){

        }else{
            direction = d;
        }
    };

	this.draw = function(ctx, pixelSize) {
		ctx.save();
		var i = 0;
        ctx.fillStyle="#FFFFFF";
        while(i < points.length){
            ctx.fillRect(points[i].x*pixelSize.x, points[i].y*pixelSize.y, pixelSize.x, pixelSize.y);
            ctx.fillStyle="#FFFFFF";
            i+=1;
        }

		ctx.restore();
	};
}

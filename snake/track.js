'use strict';

function Racecar(x0, y0) {

	var maxSpeed = 25;
	var minSpeed = -7;
	var x = x0;
	var y = y0;
	var speed = 0;
	var direction = {x:1, y:0};
    var size = {x: 72, y: 32};
    var boostMax = 40;


    this.bounds = function(){
        return new Rectangle(x-size.x/2, y-size.y/2, size.x, size.y);
    };

	this.turn = function(angle){
		direction = rotate(direction, 2 * Math.PI * angle / 360);
	};

	this.accelerate = function(a){
		speed = speed + a;
		if(speed > maxSpeed){
			speed = maxSpeed;
		}
		if(speed < minSpeed){
			speed = minSpeed;
		}
		if(speed <= 0.25 && speed > -0.25){
			speed = 0;
		}
	};

    this.reverse = function(){
        direction.x = -direction.x;
        direction.y = -direction.y;
    };

	function sign(a){
		return a > 0 ? 1 : a < 0 ? -1 : 0;
	}

	this.decelerate = function(a) {
		if(Math.abs(speed) < 0.25){
			speed = 0;
		} else {
			speed = speed - sign(speed) * a;
		}
	}

	this.move = function(){
		x = x + direction.x * speed;
		y = y + direction.y * speed;
		//console.log("Speed = "+ speed);
	}

	this.boost = function(){
		speed = speed + 5;
        if(speed > boostMax){
            speed = boostMax;
        }
	}

	this.brake = function(){
		if(Math.abs(speed) < 0.25){
			speed = 0;
		} else {
			speed = speed - sign(speed);
		}
	}

	this.draw = function(ctx){

		ctx.save();
		var img = new Image();
		img.src = "racecar.png";

		var t = Math.atan2(direction.y, direction.x);
		ctx.translate(x, y);
		ctx.rotate(t);
		ctx.translate(- size.x / 2, - size.y / 2);

		ctx.drawImage(document.getElementById("racecar"), 0, 0, size.x, size.y);

		ctx.restore();
	}

	function rotate(vector, theta){
		var theta0 = Math.atan2(vector.y, vector.x);
		theta0 = theta0 + theta;
		var result = {};
		result.x = Math.cos(theta0);
		result.y = Math.sin(theta0);
		return result;
	}
    this.collisionCheck = function(o){
        return o.bounds().touchesRect(this.bounds());
    }

}

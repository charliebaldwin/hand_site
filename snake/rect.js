function Rectangle(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.containsPoint = function(x, y){
        return (x > this.x && x <= (this.x + this.w) && y > this.y && y <= (this.y + this.h));
    }
    this.touchesRect = function(r){
        return this.containsPoint(r.x, r.y) || this.containsPoint(r.x + r.w, r.y) 
        || this.containsPoint(r.x, r.y + r.h) || this.containsPoint(r.x + r.w, r.y + r.h)
        || r.containsPoint(this.x, this.y) || r.containsPoint(this.x + this.w, this.y)
        || r.containsPoint(this.x, this.y + this.h) || r.containsPoint(this.x + this.w, this.y + this.h);

    }
    this.clone = function(){
        return new Rectangle(this.x, this.y, this.w, this.h);
    }
}
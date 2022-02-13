function Planet(location, velocity, mass, size ) {
    this.location = location;
    this.velocity = velocity;
    this.acceleration = createVector(0,0);
    this.mass = mass;
    this.size = size;

    this.arrx = [];
    this.arry = [];
}

Planet.prototype.calcForce = function(that){
    let tp = p5.Vector.sub(that.location,this.location);   
    
    let R = tp.magSq();
    let F = this.mass * that.mass / R * 50000;
    let a = F/this.mass;
    let ahat = p5.Vector.normalize(tp).mult(a);
    this.acceleration.add(ahat);
}

Planet.prototype.update = function(dt) {
    let dv = p5.Vector.mult(this.acceleration,dt);
    this.velocity.add(dv);

    let ds = p5.Vector.mult(this.velocity,dt);
    this.location.add(ds);

    this.acceleration = createVector(0,0);

}

Planet.prototype.show = function(){
    this.arrx.push(this.location.x);
    this.arry.push(this.location.y);
    ellipse(this.location.x, this.location.y ,this.size);

    for(let i = 0;i<this.arrx.length;i++){
        point(this.arrx[i],this.arry[i]);
    }
    if (this.arrx.length > 1000){
        this.arrx.shift();
        this.arry.shift();
    }
    console.log(this.arrx.length);
}


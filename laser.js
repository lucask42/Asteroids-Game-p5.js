function Laser(spos, angle){
  this.pos = createVector(spos.x + 15*cos(angle),spos.y + 15*sin(angle));
  this.vel = p5.Vector.fromAngle(angle);
  //var laserSpeed = 10
  this.vel.mult(10);


// the velocity needs to be a value and in the dirction
// of the ships heading
  this.update = function(){
    this.pos.add(this.vel);

  }
  this.render = function(){
    push();
    stroke(255);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, 4, 4);
    pop();
  }


  this.hits = function (asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
    if (d < asteroid.r) {
      console.log('HIT');
    }

  }

  this.edges = function (){
    if (this.pos.x > width + this.r){
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r){
      this.pos.x = width + this.r;
    } else if (this.pos.y > height + this.r){
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  }
}

function Ship(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.r = 5;
  this.heading = -PI / 2;
  this.rotation = 0;
  this.isBoosting = false;
  this.dampenVelocity = 0.999
  this.dampenRotation = 0.5
  this.mass = 10
  var gravity = createVector(0, 1);
  var force = 0;
  this.boosting = function(b) {
    // this.isBoosting = b;
  }
  this.applyPhysics = function(force){
    this.applyForce(force);
    this.applyForce(gravity);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  this.applyForce = function(F){
    var f = p5.Vector(F);
    this.acc.add(f);
  }
  this.update = function(){
    this.render();
    this.rotation *= this.dampenRotation;
    this.turn();
    if (keyIsDown(UP_ARROW)){
      this.isBoosting = true
      this.boost();
    }
    if (keyIsDown(RIGHT_ARROW)){
      this.setRotation(.01)
    }
    if (keyIsDown(LEFT_ARROW)){
      this.setRotation(-.01)
    }
    this.applyPhysics(force);
    this.edges()
  }
  this.gravity = function(){
    //  this.gravity (1,1);
  }
  this.boost = function(){
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.03);
  }
  this.render = function(){
    push();
    translate(this.pos.x, this.pos.y);
    fill(50,100,150);
    stroke(255);
    rotate(this.heading + PI / 2);
    triangle(-this.r,this.r,this.r,this.r,0,-this.r * 2);
    pop();
  }
  this.edges = function (){
    if (this.pos.x > width + this.r){
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r){
      this.pos.x = width + this.r;
    } else if (this.pos.y > height){
      this.pos.y = height;
      this.vel.mult(0);
    }
  }
  this.setRotation = function(a){
    this.rotation += a;
  }
  this.turn = function (){
    this.heading += this.rotation;
  }
}

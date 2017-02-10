function Asteroid() {
  this.d = random(5, 35);
  this.r = this.d / 2
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();
  this.total = floor(random(6, 20));
  this.offset = [];
  this.heading = PI / 2;
  this.rotationRate = random(-.002,.002);

  for (var i = 0; i < this.total; i++){
    this.offset[i] = random(-5,5);
  }

  this.render = function(){
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    this.turn();
    beginShape();
    for (var i = 0; i < this.total; i++){
      var angle = map(i, 0, this.total, 0, TAU);
      var d1 = this.d + this.offset[i];
      var x = d1 * cos(angle);
      var y = d1 * sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);

    pop();

  }

  this.update = function(){
    this.pos.add(this.vel);
    this.edges();

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




this.turn = function (){
  this.heading += this.rotationRate;
}


}

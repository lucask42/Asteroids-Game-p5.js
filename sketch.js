var ship;
var asteroids = [];
var asteroidsQuantity = 10;
var lasers = [];


function setup(){
  createCanvas(windowWidth, windowHeight);
  ship = new Ship(width/2,height/2);
  for (var i = 0; i < asteroidsQuantity; i++){
    asteroids.push(new Asteroid());
  }
}

// function keyPressed(){
//   if (key == ' '){
//     lasers.push(new Laser(ship.pos, ship.heading));
//
//
//   }
// }

function draw(){
  background(0);
  ship.update();



for (var i = 0; i < lasers.length; i++){
  lasers[i].render();
  lasers[i].update();
  for (var j = 0; j <asteroids.length; j++){
   if (lasers[i].hits(asteroids[j])){

   }
  }

  }


  //try a foreach loop
  // for (var i = 0; i < asteroids.length; i++){
  //   asteroids[i].render();
  //   asteroids[i].turn();
  //   asteroids[i].update();
  // }


}


class bin {
    constructor(x, y, width, height, angle) {
      var options = {
          isStatic: true
        
         
      }
      this.binImage = loadImage("bin.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.binImage, 0,-this.height/2,this.width, this.height)
      pop();
  
    }
  };
  
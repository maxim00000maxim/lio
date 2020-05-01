let angle = -30, angleChange = 1; // угол поворота уха и насколько угол будет изменяться

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(100);
    
    fill("yellow")
  translate(width/2,height/2);

  
  

  fill(255)
  push(); // левое ухо
    translate(30,-30); // для уха центр будет правее и выше, чем у головы, на 30
    rotate(radians(angle)); // поворачиваем вокруг 0,0 на 30 градусов, смотри в конце draw
    ellipse(10,0,500,20);
    rotate(radians(angle+1));
  ellipse(10,0,500,20);
   rotate(radians(angle+2));
  ellipse(10,0,500,20);
   rotate(radians(angle+3));
  ellipse(10,0,500,20);
   rotate(radians(angle+4));
  ellipse(10,0,500,20);
   rotate(radians(angle+5));
  ellipse(10,0,500,20);
   ellipse(10,0,500,20);
    rotate(radians(angle+6));
  ellipse(10,0,500,20);
   rotate(radians(angle+7));
  ellipse(10,0,500,20);
   rotate(radians(angle+8));
  ellipse(10,0,500,20);
   rotate(radians(angle+9));
  ellipse(10,0,500,20);
   rotate(radians(angle+10));
  ellipse(10,0,500,20);
  
  
  
  
    strokeWeight(5);
    point(0,0);
  pop();
  
  angle = angle + angleChange; // увеличиваем или уменьшаем angle, угол поворота, на 1
  
 
  }

 

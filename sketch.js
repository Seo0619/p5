let time = 0;
let wave = [];

function setup() {
  createCanvas(1000,1000);

}

function draw() {
  background(240);
  translate(200,500);
  let radius =60;

  stroke(0);
  noFill();
  ellipse(0,0,radius*2);
  let x = radius*cos(time);
  let y = radius*sin(time);
  line(0,0,x,y);
  
  let xprev = x;
  let yprev = y;

  x+= radius*0.5 * cos(time*2);
  y+= radius*0.5 * sin(time*2);
  ellipse(x,y,radius);
  
  fill(255);
  ellipse(x,y,8);
  line(xprev,yprev,x,y);

  
  line(x,y,300,y);
  wave.push({x ,y});

  for (let i =wave.length-1 ; i >0 ; i--){
    point(wave.length-i + 300,wave[i].y);
  }
  
  time += 0.1;

}


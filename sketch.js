function setup() {
createCanvas(2000,1000);
background(204);
}


function draw(){
  if(mouseIsPressed){
    if(mouseX>300 && mouseX<500 && mouseY>300 && mouseY<500){
    fill(255,0,0);}
  else {
    fill(255);
  }
  rect( 300,300, 200, 200);
  if(mouseX>700 && mouseX<800 && mouseY>200 && mouseY<500){
    fill(0,255,0);
  } else {
    fill(255);
  }
  rect(700 , 300, 200, 200);
}else{
    fill(255);
    rect( 300,300, 200, 200);
    rect(700 , 300, 200, 200);
}
}


//js stands for java script , set ups draw once while draw puts up 60 frames per second

var counter = 0;

var button = document.getElementById("imgClickandChange");
var img = document.getElementById("picOne");

button.addEventListener("click", changePicture);

function changePicture() {
  if (counter == 0) {
    img.src = "SculptureImages/MetSculp2F.png";
    counter = 1;
  }
  else {
    img.src = "SculptureImages/MetSculp2A.png";
    counter = 0;
  }
}



/*function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}*/
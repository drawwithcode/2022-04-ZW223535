//Choose your color
//Use 2 fingers to
//shake to add glitters
//scream to add shange the glitter's colors

const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("currentUser");

let myText;
let myText2;

let myColor;
let myGlitter;
let button;
let buttonChange;

let p1 = [
  "#F8CBDC",
  "#F5B4CB",
  "#C4DEF6",
  "#ADCFEF",
  "#FDE9A5",
  "#FFFFFF",
  "#FFF4F4",
  "#FFFFF4",
];

let p2 = ["#DCE9C1", "#F3F8EF", "#B2D8DB", "#527B9B", "#223553"];
let p3 = ["#FBD2B6", "#4E9A8F", "#E4C477", "#E9A56B", "#D87659"];
let p4 = ["#F18A95", "#DCE9C1", "#FBD2B6", "#F5A8A6", "#F18A95"];
let p5 = ["white"];

function setup() {
  //Nome dell'autore

  myText = createElement("h1", parameter);
  myText.style(
    "margin-top:10px;text-align:center;color:white; font-size: 20px; font-family:'Fuzzy Bubbles'"
  );

  //Info Canvas
  let canvas = createCanvas(windowWidth - 50, windowHeight - 190);
  canvas.style("border-radius: 30px");
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 3;
  canvas.position(x, y);
  background("white");

  select("body").attribute("bgColor", "black");

  //Testo
  myText2 = createP("Choose your Color:");
  myText2.style(
    "position:absolute;margin-left:20%;  bottom:9%;transform: translate(-50%,-50%);text-align:center;color:white; font-size: 12px; font-family:'Fuzzy Bubbles'"
  );

  //Bottone - Salvare l'opera
  button = createButton("Save");
  button.mousePressed(saveImage);
  button.style(
    "position:absolute; left:90%; bottom:1%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );

  setShakeThreshold(15);
}

function draw() {
  //Disegno
  for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];
    push();
    let r = random(2, 4);
    myColor = "black";
    stroke(myColor);
    strokeWeight(r);
    line(pmouseX, pmouseY, touch.x, touch.y);
    pop();
  }

  myGlitter = color(random(p1));
}

//Shaking and Glitters
function deviceShaken() {
  let count = 2;
  for (let i = 0; i < count; i++) {
    noStroke();
    fill(myGlitter);
    myGlitter.setAlpha(100);
    ellipse(random(0, width), random(0, height), random(2, 7));
    push();
    polygon(random(0, width), random(0, height), random(2, 7), random(5, 6));
    pop();
  }
}
//Base per gli esagoni e pentagoni
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function touchMoved() {
  return false;
}

//Salvare opera
function saveImage() {
  save("myArt.png");
}
console.log();

// permesso per iOS
function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}

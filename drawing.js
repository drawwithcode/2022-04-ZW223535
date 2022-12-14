//Per prendere il nome dalla pagina precedente
const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("currentUser");

let myText;
let myText2;
let myText3;
let myText4;
let container;

let mic;

let hue = 10;
let myColor;

let myType;

let myGlitter;

let button;

let letter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Z",
];
let type = ["ANIMAL", "CITY", "PLANT", "FOOD", "ACTION", "DRINK"];

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

function setup() {
  colorMode(HSB, 360, 100, 100);

  //Nome dell'autore
  myText = createElement("h1", parameter + ", draw a:");
  myText.style(
    "margin-bottom:-1px;text-align:center;color:white; font-size: 20px; font-family:'Fuzzy Bubbles'"
  );

  //Type Randomizer
  myType = createP(random(type) + ", starting with " + random(letter));
  myType.style(
    "margin:-1px;text-align:center;color:white; font-size: 15px; font-family:'Fuzzy Bubbles'"
  );

  //Info Canvas
  container = createElement("div");
  let canvas = createCanvas(windowWidth - 50, windowHeight - 200);
  canvas.style("border-radius: 30px; margin-top:2%; margin-bottom:2%");
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 3;
  canvas.position(x, y);
  background("white");
  canvas.parent(container);

  //Sfondo Nero
  select("body").attribute("bgColor", "black");

  myText2 = createP("1 - Scream to change the brush SIZE and COLOR");
  myText2.style(
    "padding-left:10%; margin-1px;text-align:center;color:white; font-size: 12px; font-family:'Fuzzy Bubbles'"
  );
  myText2.position(0, windowHeight * 0.85);

  myText3 = createP("2 - Use 2 fingers to be more creative!");
  myText3.style(
    "padding-left:10%; margin:-1px;text-align:center;color:white; font-size: 12px; font-family:'Fuzzy Bubbles'"
  );
  myText3.position(0, windowHeight * 0.89);

  myText4 = createP("3 - Shake to add SPARKLES");
  myText4.style(
    "padding-left:10%; margin:-1px;text-align:center;color:white; font-size: 12px; font-family:'Fuzzy Bubbles'"
  );
  myText4.position(0, windowHeight * 0.91);

  //Bottone - Salvare l'opera
  button = createButton("Save");
  button.mousePressed(saveImage);
  button.style(
    "text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
  button.position(width / 2, windowHeight * 0.95);

  setShakeThreshold(15);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  //Disegno
  myGlitter = color(random(p1));

  if (mic) {
    let micLevel = mic.getLevel();
    let hue = map(micLevel, 0, 1, 0, 1000);
    let r = map(micLevel, 0, 1, 2, 100);
    console.log(mic.getLevel());
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      push();
      myColor = color(hue, random(28, 50), 98);
      stroke(myColor);
      strokeWeight(r);
      line(pmouseX, pmouseY, touch.x, touch.y);
      pop();
    }
  }
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

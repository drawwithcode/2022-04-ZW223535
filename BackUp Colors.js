//Choose your color
//Use 2 fingers to
//shake to add glitters
//scream to add shange the glitter's colors

const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("currentUser");

let myText;
let myText2;

let palette;
let button1;
let button2;
let button3;
let button4;

let button;

let p1 = ["#ACD8C8", "#F8CBDC", "#F5B4CB", "#C4DEF6", "#ADCFEF"];
let p2 = ["#DCE9C1", "#F3F8EF", "#B2D8DB", "#527B9B", "#223553"];
let p3 = ["#FBD2B6", "#4E9A8F", "#E4C477", "#E9A56B", "#D87659"];
let p4 = ["#F18A95", "#DCE9C1", "#FBD2B6", "#F5A8A6", "#F18A95"];
let p5 = [color(255)];

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
  myText2 = createP("Choose your Palette:");
  myText2.style(
    "position:absolute;margin-left:20%;  bottom:9%;transform: translate(-50%,-50%);text-align:center;color:white; font-size: 12px; font-family:'Fuzzy Bubbles'"
  );

  //Palette 1
  push();
  button1 = createButton(" A ");
  button1.mousePressed((palette = p3));
  button1.style(
    "position:absolute; border: transparent;  background: #C9B6D8; color:transparent; left:10%;  bottom:7%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
  pop();

  //Palette 2
  push();
  button2 = createButton(" B ");
  button2.mousePressed((palette = p3));
  button2.style(
    "position:absolute; border: transparent;  background: #D54A4C; color:transparent;left:30%;  bottom:7%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
  pop();

  //Palette 3
  push();
  button3 = createButton(" C ");
  button3.mousePressed((palette = p3));
  button3.style(
    "position:absolute; border: transparent;  background: #2D4552; color:transparent;left:50%;  bottom:7%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
  pop();

  //Palette 4
  push();
  button4 = createButton(" D ");
  button4.mousePressed((palette = p4));
  button4.style(
    "position:absolute; border: transparent;  background: #ACD8C8; color:transparent;left:70%;  bottom:7%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
  pop();

  //Bottone - Salvare l'opera
  button = createButton("Save");
  button.mousePressed(saveImage);
  button.style(
    "position:absolute; left:90%; bottom:1%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );

  setShakeThreshold(2);
}

function draw() {
  //Disegno
  for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];
    const color = palette[i];
    push();
    let r = random(2, 4);
    stroke(color);
    strokeWeight(r);
    line(pmouseX, pmouseY, touch.x, touch.y);
    pop();
  }
}

function touchMoved() {
  return false;
}

//Salvare opera
function saveImage() {
  save("myArt.png");
}

// permesso per iOS
function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}

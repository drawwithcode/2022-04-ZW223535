const urlString = window.location.href;
const url = new URL(urlString);
let parameter = url.searchParams.get("currentUser");

let myText;
let button;

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

  //Salvare l'opera
  button = createButton("Save");
  button.mousePressed(saveImage);
  button.style(
    "position:absolute; left:50%;  top:97%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
}

function saveImage() {
  save("myArt.png");
}
//Fuzzy Bubbles

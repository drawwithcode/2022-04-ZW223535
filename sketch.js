const urlString = window.location.href;
const url = new URL(urlString);

let myText2;
let myText1;
let myType;
let go;

function setup() {
  //Istruzioni
  myText1 = createElement("h2", "[Open with your Phone]");
  myText1.style(
    "margin-top:20%;text-align:center;color:white; font-size: 10px; font-family:'Fuzzy Bubbles'"
  );
  //Nome dell'autore
  myText2 = createElement("h1", "What's your name?");
  myText2.style(
    "margin-top:2%;text-align:center;color:white;font-size: 20px; font-family:'Fuzzy Bubbles'"
  );

  //Inserimento nome
  myType = createInput("").attribute("placeholder", "write your name");
  myType.style(
    "position:absolute; margin-top:2%; left: 50%; transform: translate(-50%,-50%); text-align: center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );

  //Botton
  go = createButton("Next");
  go.style(
    "position:absolute; left:50%;margin-top:7%;transform: translate(-50%,-50%);text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );

  go.mouseClicked(nextPage);
}

function draw() {
  if (myType.value() == "") {
    myText2.html("What's your name?");
  } else {
    myText2.html("Hi, " + myType.value() + "!");
  }
}

function nextPage() {
  window.open(
    url.origin + "/drawing.html?currentUser=" + myType.value(),
    "_self"
  );
}

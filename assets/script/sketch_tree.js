let angle;
let axiom = "F";
let sentence = axiom;
let len = 200;

let rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
};

function generate() {
  len *= 0.5;
  let nextSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    let found = false;
    for (let j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();
}

function turtle() {
  background(245);
  resetMatrix();
  noFill();
  stroke(0);
  translate(width / 2, height);
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = radians(25);
  background(0);
  turtle();
  let button = createButton("Genera");
  button.position(10, 100);
  button.mousePressed(generate);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  turtle();
}

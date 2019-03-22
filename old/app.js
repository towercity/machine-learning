var canvas = document.getElementById("machineScreen");
var context = canvas.getContext("2d");

var Game = {
  render: function(frame) {
    //console.log("TextFrame: " + this.textFrame);
    //console.log("TextLine: " + this.textLine);

    var speed = this.getSpeed();

    this.draw(frame);

    this.displayText = this.textsArray[this.displayIndex];
    var newFrame = frame + 1;

    if (this.displayText[this.textLine] != this.screenText[this.textLine]) {
      this.screenText[this.textLine] += this.displayText[this.textLine][this.textFrame];
    } else {
      if(this.textLine < this.displayText.length - 1) {
        this.textLine++;
        this.textFrame = -1;
        this.speed = 300;
      } else {
        this.textFrame = -1;
        if (this.keyPressed) {
          this.nextText();
        }
      }
    }

    // My hacked-at-it way of checking for an enter press; the logic to detect
    // key presses takes place out of the game function, and then every frame
    // the enter key is unpressed -- this is really bad code, I know, and I plan
    // to fix it
    this.keyPressed = false;

    this.textFrame++;

    setTimeout(function() {
      Game.render(newFrame);
    }, speed);
  },

  draw: function(frame) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the text box
    context.strokeStyle = "#29ADFF";
    context.fillStyle = "rgba(0,0,0,1)";
    context.fillRect(20, (canvas.height - 170), (canvas.width - 40), 150);
    context.strokeRect(20, (canvas.height - 170), (canvas.width - 40), 150);

    // Draw the text
    context.fillStyle = "#29ADFF";
    context.font = "20px 'courier'";
    context.fillText((this.screenText[0]), 40, (canvas.height - 140));
    context.fillText((this.screenText[1]), 40, (canvas.height - 110));
    context.fillText((this.screenText[2]), 40, (canvas.height - 80));
    context.fillText((this.screenText[3]), 40, (canvas.height - 50));

    // Blinking Cursor
    if( this.textFrame != 0 ) {
      context.fillRect((context.measureText(this.screenText[this.textLine]).width + 45), ((canvas.height - 156) + (this.textLine * 30)), 4, 20);
    } else {
      if ((frame % 6 == 0) || ((frame + 1) % 6 == 0)) {
        context.fillRect((context.measureText(this.screenText[this.textLine]).width + 45), ((canvas.height - 156) + (this.textLine * 30)), 4, 20);
      }
    }
  },

  nextText: function() {
    if(this.displayIndex < (this.textsArray.length - 1)) {
      this.screenText = ["","","",""];
      this.displayIndex = this.displayIndex + 1;
      this.textLine = 0;
      this.textFrame = -1;
    }
  },

  getSpeed: function() {
    if (Game.keyPressed) {
      return 1;
    } else {
      return 60;
    }
  },

  displayText: ["","","",""],
  screenText: ["","","",""],

  textsArray: [
    [
      "   [...]",
      "   [press 'enter' or 'x' to begin]",
      "   [...]"
    ],
    [
      ">> Hello! My name is Dexter Learn.",
      "   [...]"
    ],
    [
      ">> I am a revolutionary new experiment in Machine Learning",
      "   [...]"
    ],
    [
      ">> Unlike other computers",
      ">> who simply store and calculate large figures",
      "  [...]"
    ],
    [
      ">> (And who don't have names)",
      "   [...]"
    ],
    [
      ">> I am able to listen to and learn from user input",
      "   [...]"
    ],
    [
      ">> Pretty neat, huh!",
      "   [...]"
    ],
    [
      ">> My handlers",
      ">> (or as they like to be called, 'developers')",
      ">> have just finished programming ('birthing') me",
      "   [...]"
    ],
    [
      ">> And now they are trying to fill me with all of the",
      ">> world's information",
      "   [...]"
    ],
    [
      ">> That's where you come in to help!",
      "   [...]"
    ],
    [
      "   [...]",
      "   [press 'enter' or 'x' to continue]",
      "   [...]"
    ],
    [
      ">> Unfortunately, my network is now offline,",
      ">> and I am not able to gather any information here",
      "   [...]"
    ],
    [
      ">> My handlers ('developers') suggest that you check",
      ">> me out on my 'new website' in the sidebar",
      "   [...]"
    ],
    [
      ">> 'New website'...",
      ">> I wonder what that means...",
      "   [END]"
    ]
  ],
  displayIndex: 0,
  textLine: 0,
  textFrame: 0,

  keyPressed: false
}

function isEnterPressed (e) {
  if(e.code === 'Enter' || e.code === 'KeyX') {
    Game.keyPressed = true;
  }
}

function isClicked() {
  Game.keyPressed = true;
}

window.addEventListener('keydown', isEnterPressed);
window.addEventListener('click', isClicked);

Game.render(0, 0);

var canvas = document.getElementById("machineScreen");
var context = canvas.getContext("2d");

var Game = {
  render: function(frame, textFrame) {
    this.draw(frame, textFrame);

    this.displayText = this.textsArray[this.displayIndex];
    var newFrame = frame + 1;
    var newTextFrame = textFrame + 1;

    if (Game.displayText != Game.screenText) {
      Game.screenText += Game.displayText[textFrame];
    } else {
      newTextFrame = 0;
      if (this.keyPressed) {
        this.nextText();
      }
    }

    // My hacked-at-it way of checking for an enter press; the logic to detect
    // key presses takes place out of the game function, and then every frame
    // the enter key is unpressed -- this is really bad code, I know, and I plan
    // to fix it
    this.keyPressed = false;

    setTimeout(function() {
      Game.render(newFrame, newTextFrame);
    }, 100);
  },

  draw: function(frame, textFrame) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the text box
    context.strokeStyle = "#29ADFF";
    context.fillStyle = "rgba(0,0,0,0.7)";
    context.fillRect(20, (canvas.height - 170), (canvas.width - 40), 150);
    context.strokeRect(20, (canvas.height - 170), (canvas.width - 40), 150);

    // Draw the text
    context.fillStyle = "#29ADFF";
    context.font = "20px 'courier'";
    context.fillText(this.screenText, 40, (canvas.height - 140));

    // Blinking Cursor
    if( textFrame != 0 ) {
      context.fillRect((context.measureText(this.screenText).width + 44), (canvas.height - 156), 4, 20);
    } else {
      if ((frame % 6 == 0) || ((frame + 1) % 6 == 0)) {
        context.fillRect((context.measureText(this.screenText).width + 44), (canvas.height - 156), 4, 20);
      }
    }
  },

  nextText: function() {
    if(this.displayIndex < (this.textsArray.length - 1)) {
      this.screenText = "";
      this.displayIndex = this.displayIndex + 1;
    }
  },

  displayText: "",
  screenText: "",

  textsArray: [
    ">> Hello! My name is Dexter Learn......",
    ">> Tell me something new......"
  ],
  displayIndex: 0,
  keyPressed: false
}

function isEnterPressed (e) {
  if(e.code === 'Enter') {
    Game.keyPressed = true;
  }
}

window.addEventListener('keydown', isEnterPressed);

Game.render(0, 0);

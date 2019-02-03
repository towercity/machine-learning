var canvas = document.getElementById("machineScreen");
var context = canvas.getContext("2d");

var Game = {
  render: function(frame, textFrame) {
    this.draw(frame, textFrame);

    this.displayText = this.textsArray[this.displayIndex];
    var newFrame = frame + 1;

    setTimeout(function() {
      if (Game.displayText != Game.screenText) {
        Game.screenText += Game.displayText[textFrame];

        Game.render(newFrame, textFrame + 1);
      } else {
        Game.render(newFrame, 0);
      }
    }, 100, this);
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

  displayText: "",
  screenText: "",

  textsArray: [
    ">> Hello! My name is Dexter Learn......",
    ">> Tell me something new......"
  ],
  displayIndex: 0
}

Game.render(0, 0);

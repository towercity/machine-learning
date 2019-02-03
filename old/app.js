var canvas = document.getElementById("machineScreen");
var context = canvas.getContext("2d");

var Game = {
  render: function(textFrame) {
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

    setTimeout(function() {
      if (Game.displayText != Game.screenText) {
        Game.screenText += Game.displayText[textFrame];

        Game.render(textFrame + 1);
      } else {
        Game.render(0);
      }
    }, 100, this);
  },

  displayText: ">> Hello! My name is Dexter Learn! ...",
  screenText: "",
}

Game.render(0);

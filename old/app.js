var canvas = document.getElementById("machineScreen");
var context = canvas.getContext("2d");

var Game = {
  render: function() {
    // Draw the text box
    context.strokeStyle = "#29ADFF";
    context.fillStyle = "rgba(0,0,0,0.8)";
    context.fillRect(20, (canvas.height - 170), (canvas.width - 40), 150);
    context.strokeRect(20, (canvas.height - 170), (canvas.width - 40), 150);

    // Draw the text
    context.fillStyle = "#29ADFF";
    context.font = "20px 'VT323', 'courier'";
    context.fillText(this.displayText, 40, (canvas.height - 140));
  },
  displayText: ">> Hello! My name is Dexter Learn! ..."
}

Game.render();

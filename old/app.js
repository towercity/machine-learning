var canvas = document.getElementById("machineScreen");
var context = canvas.getContext("2d");

context.strokeStyle = "#29ADFF";
context.strokeRect(20, (canvas.height - 170), (canvas.width - 40), 150);

context.fillStyle = "#29ADFF";
context.font = "20px 'VT323', 'courier'";
context.fillText(">> Hello! My name is Dexter Learn! ...", 40, (canvas.height - 140));

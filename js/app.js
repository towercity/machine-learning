function teachDexter() {
  var textBox = document.getElementById("knowledge");
  var response = document.getElementById("response");
  var userString = document.getElementById("text").value;

  textBox.style.display = "none";
  response.innerHTML = "Wow...<br>" +
                        "I didn't know that " +
                        '"' + userString + '"<br>' +
                        "Thank you...<br> I am learning...";
}

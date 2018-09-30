function teachDexter() {
  var textBox = document.getElementById("text");
  var response = document.getElementById("response");
  var userString = textBox.value;

  //clear textbox, delayed so user is disctracted by modal
  setTimeout(function() { textBox.value = ''; }, 200);

  //textBox.style.display = "none";
  response.innerHTML = "Wow...<br>" +
                        "I didn't know that " +
                        '"' + userString + '"<br>' +
                        "Thank you...<br> I am learning...";
}

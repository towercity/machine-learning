function teachDexter() {
  var textBox = document.getElementById("text");
  var response = document.getElementById("response");
  var userString = textBox.value;

  //clear textbox, delayed so user is disctracted by modal
  setTimeout(function() { textBox.value = ''; }, 200);
  setTimeout(function() { document.getElementById("email").value = ''; }, 200);

  var dexterTextArray = ["Wow...<span></span><span></span><span></span><span></span><br>" +
                        "I didn't know that " + '"' + userString + '"...<span></span><span></span><span></span><span></span><br>' +
                        "Thank you...<span></span><span></span><span></span><span></span><br>"  +
                        "I am learning lots..."];

  var typed = new Typed(response, {
    strings: dexterTextArray,
    typeSpeed: 50,
    startDelay: 900
  })
}


  console.log("'Thank you for visiting my console! I'm sure you'll have a lot of fun tinkering around in my insides!'");
  console.log("     --DL");
  console.log("");
  console.log("'Please visit http://www.matthewjnerger.com/machine-learning/credits/index.html to learn more about how I was made, and by whom!'");
  console.log("     --DL");

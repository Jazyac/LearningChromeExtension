


document.addEventListener('DOMContentLoaded', function() {
  var turnON = document.getElementById('turnON');
  turnON.addEventListener('click', function() {


chrome.runtime.sendMessage({"message": "buttonClicked"});
  }, false);
}, false);

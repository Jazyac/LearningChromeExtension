


document.addEventListener('DOMContentLoaded', function() {
  var turnON = document.getElementById('turnON');
  turnON.addEventListener('click', function() {

console.log("clcik reached in popup,js");

chrome.runtime.sendMessage({"message": "buttonClicked"});
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   var activeTab = tabs[0];
  //   chrome.tabs.sendMessage(activeTab.id, {"message": "buttonClicked"});
  // });
    
 
  }, false);
}, false);

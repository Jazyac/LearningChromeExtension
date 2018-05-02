
var isOn=false;


document.addEventListener('DOMContentLoaded', function() {
  var turnON = document.getElementById('turnON');
  turnON.addEventListener('click', function() {


  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ON: isOn}, function(response) {
        isOn=response.farewell;
  
             console.log(isOn);
      
  
  });
    });
    console.log("old:"+isOn);
    isOn=!isOn;
    console.log("new:"+isOn);
    
  //  chrome.tabs.executeScript(null, {file: "content.js"});

 
  }, false);
}, false);

// chrome.tabs.onMessage.addListener(
//   function(request, sender, sendResponse) {
//    // sendResponse({isOn: true});
// console.log("bbbbbbb");



//   });
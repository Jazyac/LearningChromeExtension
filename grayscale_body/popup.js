


document.addEventListener('DOMContentLoaded', function() {
  var turnON = document.getElementById('turnON');
  turnON.addEventListener('click', function() {

//console.log("clcik reached in popup,js");
//alert("clcik reached in popup,js");

    chrome.runtime.sendMessage({type: "contentSwitch"}, function(response) {
   //  alert(response.farewell);
    });
    //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, {ON: isOn}, function(response) {
  //       isOn=response.farewell;
  
  //            console.log(isOn);
      
  
  // });
  //   });
  //   console.log("old:"+isOn);
  //   isOn=!isOn;
  //   console.log("new:"+isOn);
    
  //  chrome.tabs.executeScript(null, {file: "content.js"});

 
  }, false);
}, false);

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     sendResponse(true);
// //console.log("bbbbbbb");



//   });
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//       console.log("background.js got a message")
//       console.log(request);
//       console.log(sender);
//       sendResponse(isOn);
//   }
// );
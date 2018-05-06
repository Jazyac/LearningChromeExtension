
// background.js

// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });




// console.log("back strated");
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {type: "contentSwitch"}, function(response) {
//              console.log(response.farewell);
//             });
//           });




// var isOn=false;

// function switchOnOff(){
//   isOn=!isOn;


// }





// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {

        
//       if (request.type == "backgroundSwitch"){
      
//         chrome.runtime.sendMessage({type: "contentSwitch"}, function(response) {
//             alert(response.farewell);
//           });
      
//         sendResponse({farewell: "goodbyeBackground"});
//       }
//     });



// chrome.runtime.onMessage.addListener(
//   function(request,sender,sendResponse) {


//       console.log("background.js got a message")
//       console.log(request);
//       console.log(sender);
//       sendResponse(isOn);

//     });



    //   if(request.type == "backgroundSwitch"){
    //     console.log("background reveived request to switch");

    //   if(request.type == "isItOn") {
    //     sendResponse({isON: isOn});
    //   }

    //   else
      


        // switchOnOff();
        // chrome.runtime.sendMessage({type: "contentSwitch"});

    //   }

    
      

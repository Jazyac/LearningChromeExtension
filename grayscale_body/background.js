
var isOn=false;

function switchOnOff(){
  isOn=!isOn;


}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        
      if (request.type == "backgroundSwitch"){
      
        chrome.runtime.sendMessage({type: "contentSwitch"}, function(response) {
            alert(response.farewell);
          });
      
        sendResponse({farewell: "goodbyeBackground"});
      }
    });



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

    
      

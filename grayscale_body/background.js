
var isOn=false;

function switchOnOff(){
  isOn=!isOn;


}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.type == "backgroundSwitch")
        sendResponse({farewell: "goodbye"});
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

    
      

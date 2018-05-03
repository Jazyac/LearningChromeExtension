


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        alert("request received in content");
      if (request.type == "contentSwitch"){
      
    
        sendResponse({farewell: "goodbyeCOntetn"});
      }
    });



// //responding to background message
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");

//            if(request.type == "backgroundSwitch"){


//             switchOnOff();
//             chrome.runtime.sendMessage({type: "contentSwitch"});
    
//           }


//       if (request.ON == true){
//         sendResponse({farewell: true});
//         $('body').css("-webkit-filter","grayscale(50%)");
//       }
//       else{

//         sendResponse({farewell: false});
//         $('body').css("-webkit-filter","grayscale(0%)");


//       }
//     });

    
// //sending to background
// chrome.runtime.sendMessage(
//   {type: "isItOn"},
//     function (response) {
       
//             if (response.isON == true){
//       console.log("true");
//         $('body').css("-webkit-filter","grayscale(50%)");
//       }
//       else{
//         console.log("false");
      
//         $('body').css("-webkit-filter","grayscale(0%)");


//       }



//     }
// );
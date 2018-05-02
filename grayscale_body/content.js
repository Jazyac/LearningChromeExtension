

//responding to background message
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.ON == true){
        sendResponse({farewell: true});
        $('body').css("-webkit-filter","grayscale(50%)");
      }
      else{

        sendResponse({farewell: false});
        $('body').css("-webkit-filter","grayscale(0%)");


      }
    });


// //sending to background
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log("asdasdasdasdasds");
    
//     // console.log(response.farewell);

//     // if (request.ON == true){
     
//     //     $('body').css("-webkit-filter","grayscale(50%)");
//     //   }
//     //   else{

      
//     //     $('body').css("-webkit-filter","grayscale(0%)");


//     //   }
//   });
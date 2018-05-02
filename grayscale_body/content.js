

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


//sending to background
// chrome.runtime.sendMessage({ON: "hello"}, function(response) {
//    // console.log("asdasdasdasdasds");
    
//     // console.log(response.farewell);

//     if (response == true){
//       console.log("true");
//         $('body').css("-webkit-filter","grayscale(50%)");
//       }
//       else{
//         console.log("false");
      
//         $('body').css("-webkit-filter","grayscale(0%)");


//       }
//   });
chrome.runtime.sendMessage(
    "",
    function (response) {
       
            if (response == true){
      console.log("true");
        $('body').css("-webkit-filter","grayscale(50%)");
      }
      else{
        console.log("false");
      
        $('body').css("-webkit-filter","grayscale(0%)");


      }



    }
);

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "popupSendsButtonClicked" ) {
      //var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log('Message received by content.js-'+request.message);


chrome.runtime.sendMessage(
  {"message": "isOn"},
    function (response) {
     console.log('Response received by content.js from background-'+response.message );

            if (response.message == false){
      
        $('body').css("-webkit-filter","grayscale(50%)");


      }
      else{
   
      
        $('body').css("-webkit-filter","grayscale(0%)");


      }

     // setOnOff();

    }
);



    }
  }
);

function setOnOff(){

  chrome.runtime.sendMessage(
    {"message": "setOnOff"},
      function (response) {
       
   
  
      }
  );
  



}
// // content.js
// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });


// console.log("content strated");

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log("request received in content");
//       if (request.type == "contentSwitch"){
      
    
//         sendResponse({farewell: "goodbyeCOntetn"});
//       }
//       return true;
//     });



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
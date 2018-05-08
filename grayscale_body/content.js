

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
   
      
      
      if (request.stateChanged == false){
      
        $('body').css("-webkit-filter","grayscale(50%)");


    

      }
      else if(request.stateChanged == true){
       
      
        $('body').css("-webkit-filter","grayscale(0%)");


      




    }
  }
);



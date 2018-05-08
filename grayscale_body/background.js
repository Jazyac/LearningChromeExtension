var isOn=false;



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       
      if (request.message === "buttonClicked"){
    
         isOn=!isOn;
         
    
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"stateChanged": isOn});
          });
            
      
      }


    });


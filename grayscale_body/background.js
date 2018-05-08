var isOn=false;

initialize();




function initialize(){

    if(!isSet()){


        // chrome.storage.local.set({isOn: false});

    }

    
}

function isSet(){


//   if( chrome.storage.local.get(['isOn']) == null){

// return false;

//   }

// return true;
}

function returnIsOn(){

    // return chrome.storage.local.get(['isOn']);
     return isOn;
 }
 
 function setOnOff(){
  
//  if(isSet()){
 
//     //  chrome.storage.local.set({isOn: !isOn});
 
//  return;
//  }
 
//  initialize();
 
isOn=!isOn;
 
 
 }

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       
      if (request.message === "buttonClicked"){
        
         //isOn=!isOn;
        setOnOff();
    
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"stateChanged": returnIsOn()});
          });
            
      
      }


    });


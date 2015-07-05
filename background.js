

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.msg === "pingback" )
    {
    	console.log("hi");
        
    	chrome.tabs.query({active:!0,currentWindow:!0},function(tbs){
	chrome.tabs.sendMessage(tbs[0].id,{msg:"getSelectedText"},
	function(a){

console.log(a.msg);
 sendResponse( {msg: "akshay"} );


	})});



    
           

        
        

	
            

              
     }


    
});


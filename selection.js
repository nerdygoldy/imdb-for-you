
//starts as soon as a page matching our url expression loads.

chrome.runtime.onMessage.addListener( function(request,sender,senderResponse)
{
	if(request.msg==="getSelectedText"){
		
		//console.log("hi afgain");
		senderResponse({msg:window.getSelection().toString()});
		

	}
	else
		console.log("bye");
	
  

});

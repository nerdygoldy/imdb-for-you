
function myFun(){
	//renderStatus("3");
	var port=chrome.runtime.connect({name: "my-channel"});

	chrome.tabs.query({active:!0,currentWindow:!0},function(tbs){
			port.postMessage({ tid: tbs[0].id});
			chrome.tabs.sendMessage(tbs[0].id,{msg:"getSelectedText"},
			function(response){
				//var 
				if(response){
					var searchUrl = 'http://www.omdbapi.com/?t='+response.msg+'&y=&plot=short&r=json';
	  				var x = new XMLHttpRequest();
	  				x.open('GET', searchUrl);
	  				x.responseType = 'json';
	  				x.onload = function() {
	    
	    				var movInfo = x.response;
	    				console.log("hi");
	    				console.log(movInfo.Error);
	    				if(!movInfo.Error){
	    					chrome.browserAction.setBadgeText({text: movInfo.imdbRating,tabId: tbs[0].id});
	    					renderInfo(movInfo);		
	    				}
	    				else{
	    					chrome.browserAction.setBadgeText({text: '',tabId: tbs[0].id});
	    					document.getElementById('movTitle').textContent = "N/A";
	    				}
	    				
					};
					x.onerror = function() {
	    				errorCallback('Network error.');
	  				};
	  				x.send();

				}
				
			
			})});
	
};


function renderInfo(info) {
	document.getElementById('movTitle').textContent = info.Title;
	document.getElementById('movGenre').textContent = info.Genre;
	document.getElementById('movRuntime').textContent = info.Runtime;
}

document.addEventListener('DOMContentLoaded', function() {
 	myFun();
 //renderStatus("2");
});

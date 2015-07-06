var tid;
chrome.runtime.onConnect.addListener(function(port) {
    	port.onMessage.addListener(function (msg) {
       		tid=msg.tid;
       		console.log(msg.tid);
        }
    );



    	port.onDisconnect.addListener(function() {
    		console.log("hi");
    		chrome.browserAction.setBadgeText({text: "",tabId: tid });
    		console.log("hi2");
		});
    
});

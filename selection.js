	console.log("hi");
        
			chrome.runtime.onMessage.addListener( function(req,sender,sr)
		{
			if(req.msg==="getSelectedText"){
				//alert("bye");
				console.log("hi afgain");
				sr({msg:"abcd"});
				return true;
			
			}
			else
				console.log("bye");
				
		      
			
		});

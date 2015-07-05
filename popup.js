
function myfun(){
	renderStatus("3");
	chrome.extension.sendMessage({msg:"pingback"},
        function (response) {
            
            renderStatus(response.msg);
        });
	
};


function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
 myfun();
 //renderStatus("2");
});

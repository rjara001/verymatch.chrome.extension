
var seltext = null;

var counter = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
    counter++;

    if (counter == 5) {
        alert("Hey !!! You have clicked five times");
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	
    switch(request.message)
    {
        case 'setText':
            window.seltext = request.data
			alert("se rescata el valor " + data);
        break;
         
        default:
			alert("Enviando el dato");
            //sendResponse({data: 'Invalid arguments'});
        break;
    }
});
 
 
function savetext(info,tab)
{
    var jax = new XMLHttpRequest();
    jax.open("POST","http://localhost/text/");
    jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    jax.send("text="+seltext);
    jax.onreadystatechange = function() { if(jax.readyState==4) { alert(jax.responseText);  }}
}
 
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++)
{

    var context = contexts[i];
    chrome.contextMenus.create({"title": "Send to Server", "contexts":[context], "onclick": savetext}); 
}

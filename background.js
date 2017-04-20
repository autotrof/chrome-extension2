var contexts = {
	"selection":selectionFunction,
	"link":linkFunction,
	"image":imageFunction,
	"page":pageFunction
};

$.each(contexts,function(context,fun){
	chrome.contextMenus.create({
		"title":"PENS Social Media Toolkit",
		"contexts":[context],
		"onclick":fun,
		"id":context
	});
});

function selectionFunction (obj) {
	// alert("selection");
	chrome.windows.create({url:"https://www.facebook.com/herobimbel",type:"panel"});
}
function linkFunction (obj) {
	chrome.windows.create({url:"https://www.facebook.com/herobimbel",type:"panel"});
}
function imageFunction (obj) {
	chrome.windows.create({url:"https://www.facebook.com/herobimbel",type:"panel"});
}
function pageFunction (obj) {
	chrome.windows.create({url:"https://www.facebook.com/herobimbel",type:"panel"});
}

// chrome.contextMenus.create({
// 	"title":"social media toolkit",
// 	"contexts":["selection"],//on select text
// 	"onclick":myFunction
// });

// function myFunction (obj) {
// 	// alert(obj.selectionText);
// 	console.log(obj);
// 	var text = obj.selectionText;
// 	chrome.tabs.create({url:"https://www.facebook.com/"+text});
// }
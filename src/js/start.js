chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create("/../index.html", {
		"bounds": {
			"width": 690,
			"height": 800
		}
	});
});
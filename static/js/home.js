$(".link-email").click(function(ev) {
	ev.preventDefault();
	window.location.href = atob("bWFpbHRvOg==") + atob("d3RlZGVy") + "@" + atob("aHlkcmVvbi5jb20=");
});

$(document).ready(function() {
	$(".animsition").animsition({
		linkElement: ".animsition-link",
		loading: true,
		loadingParentElement: "body",
		loadingClass: "animsition-loading",
		browser: ["animation-duration", "-webkit-animation-duration"]
	}).on("animsition.inStart", function() {
		$(".animsition").show();
	});
});
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

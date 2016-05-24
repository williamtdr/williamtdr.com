$("#link-email").click(function(ev) {
	ev.preventDefault();
	window.location.href = atob("bWFpbHRvOg==") + atob("d3RlZGVy") + "@" + atob("aHlkcmVvbi5jb20=");
});

$(document).ready(function() {
	var slides = $("#slides");

	if(slides.length) slides.slidesjs({
		width: 700,
		height: 393,
		callback: {
			loaded: function() {
				// hide navigation and pagination
				$('.slidesjs-pagination, .slidesjs-navigation').hide(0);
			}
		}
	});
});
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
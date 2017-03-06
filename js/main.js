/**
 * Main onload function
 */
(function () {
	var bgImage = document.getElementById('slider-image');

	function changeSource() {
		bgImage.src = App.ImageHelper.getSource()
	}

	setInterval(changeSource, App.PERIOD);
}());

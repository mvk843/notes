(function utilities(window, document, $) {

	window.classes = {
		active: 'active',
		popupOpened: 'popup-opened',
		disabled: 'disabled',
		fixed: 'fixed',
		hold: 'hold',
		init: 'init',
		open: 'open',
		success: 'success',
		error: 'error',
		result: 'result',
		freeze: 'freeze',
		hidden: 'hidden',
		shaded: 'shaded',
		shrink: 'shrink',
		ready: 'ready',
		hover: 'hover',
		done: 'done',
		loading: 'loading'
	};

	window.events = {
		ytReady: 'youTubeApiReady',
		play: 'play',
		stop: 'stop',
		pause: 'pause'
	};

	window.roundTo = function (x, n) {
		if (isNaN(x) || isNaN(n)) return false;
		var m = Math.pow(10, n);
		return Math.round(x * m) / m;
	};

	window.ucFirst = function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	window.getDay = function (date) {
		return new Date(date.getFullYear(), date.getMonth(), date.getDate());
	};

	window.getNextDay = function (from, daysCount) {

		var nextDay = new Date(from.getTime());
		nextDay.setDate(nextDay.getDate() + daysCount);

		return new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate());

	};

	window.getOffsetRect = function (elem) {

		var box = elem.getBoundingClientRect();
		var body = document.body;
		var docElem = document.documentElement;
		var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
		var clientTop = docElem.clientTop || body.clientTop || 0;
		var clientLeft = docElem.clientLeft || body.clientLeft || 0;
		var top  = box.top +  scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;
		return {
			top: Math.round(top),
			left: Math.round(left),
			width: box.width,
			height: box.height
		}
	};

	window.getChar = function (event) {

		if (event.which === null) {
			if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode)
		}

		if (event.which !== 0 && event.charCode !== 0) {
			if (event.which < 32) return null;
			return String.fromCharCode(event.which);
		}

		return null;
	};

	window.enterFullScreen = function (element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	};

	window.exitFullScreen = function () {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	};

	window.isFullScreen = function () {
		return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
	};

	window.onGoogleMapsApiReady = function() {

		$(window).trigger('googleMapsApiReady');

	};

	window.loadGoogleMapsApi = function () {

		var $script = $('<script async defer></script>');

		$script.attr('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ1TXC6qzkLOU_hPKB4Rkx7yx3EpS3P1k&callback=onGoogleMapsApiReady');

		$('head').append($script);

	};

	window.onYouTubeIframeAPIReady = function () {

		$(window).trigger(window.events.ytReady);

	};

	window.loadYTApi = function () {

		var $script = $('<script async defer></script>');

		$script.attr('src', 'https://www.youtube.com/iframe_api');

		$('head').append($script);

	};

}(window, document, jQuery));
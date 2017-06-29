$(document).on('keydown', function (e) {
	var keyCode = e.keyCode,
		$audio = $('audio'),
		$key = $('.js-key'),
		thisAudio = $audio.filter('[data-key="' + keyCode + '"]')[0],
		thisKey = $key.filter('[data-key="' + keyCode + '"]')[0];

	if (thisAudio) {
		thisAudio.pause();
		thisAudio.currentTime = 0;
		thisAudio.play();
		thisKey.classList.add('js-active');
	}
});

$(document).on('keyup', function (e) {
	var $key = $('.js-key'),
		keyCode = e.keyCode,
		thisKey = $key.filter('[data-key="' + keyCode + '"]')[0];

	thisKey.classList.remove('js-active');

});
//module.export
var introDef = function() {
	fsm.def('intro', function() {
		console.info('[INTRO]');

		$('<p>').html('Loading[X]').css({
			'text-align': 'center'
		}).appendTo($('#stateContainer'));

		var counter = 4;
		var interval = setInterval(function() {
			counter--;
			if (counter == 0) {
				clearInterval(interval);
				fsm.go('menu');
			}
			$('p').html('Loading[' + counter + ']');
		}, 1000);


	});
};
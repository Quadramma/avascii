var loop = {
	arr: [],
	seconds: 0,
	subscribe: function(fn) {
		this.arr.push(fn);
	},
	advance: function(time) {
		this.seconds++;
		for (var x in this.arr) {
			this.arr[x](seconds);
		}
	}
	/*,
	anim: function(fn) {
		window.requestAnimationFrame(function( time) {
			// time ~= +new Date // the unix time
			fn(time);
		});
	}*/
}
setInterval(function() {
	loop.advance();
}, 1000);

/*
var _fnLoop = (function() {
	var lastTime = 0;
	var vendors = ['webkit', 'moz'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame =
			window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
});
_fnLoop();
*/
var debug = {
	wrap: function(fn) {
		this.arr = [];
		//this._wrapConsole();
		//try {
		fn();
		//} catch (err) {
		//this.arr.push('[error]' + err);
		//	throw err;
		//}
	},
	_wrapConsole: function() {
		var self = this;
		var _log = console.log,
			_warn = console.warn,
			_info = console.info,
			_error = console.error;

		console.log = function() {
			self.update('[log]' + arguments[0]);
			return _log.apply(console, arguments);
		};

		console.info = function() {
			self.update('[info]' + arguments[0]);
			return _log.apply(console, arguments);
		};

		console.warn = function() {
			self.update('[warn]' + arguments[0]);
			return _warn.apply(console, arguments);
		};
		console.error = function() {

			return _warn.apply(console, arguments);
		};
	},
	update: function(msg) {
		var self = this;
		self.arr.push(msg);


return;
		if ($('#debug').length == 0) {
			$('<div/>').attr({
				id: 'debug'
			}).css({
				'text-align': 'center',
				position: 'absolute',
				bottom: 0
			}).appendTo($('body'));
			$('#debug').append($('<ul/>'));
		}



		var arr = [];
		for (var x = self.arr.length - 1; x > self.arr.length - 5; x--) {
			if(x == -1) break;
			var msg = self.arr[x];
			arr.push(msg);
		}

		$('#debug').find('ul').empty().append(_.map(arr, function(obj) {
			return $('<li/>').html(obj);
		}));

	}
};
//module.export
var menuDef = function() {
	fsm.def('menu', function() {
		console.info('[MENU]');



		var options = [{
			name: 'play',
			label: 'Play',
			action: function() {
				fsm.go('game');
			}
		}, {
			name: 'credits',
			label: 'Credits',
			action: function() {
				fsm.go('credits');
			}
		}]

		var lis = _.map(options, function(obj) {
			var li = $('<li>').html(obj.label);
			li.on('click', function() {
				obj.action();
			});
			return li;
		});

		$('#stateContainer').empty();
		$('<ul/>').append(lis).appendTo($('#stateContainer'));

	});
};
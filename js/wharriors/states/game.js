//module.export
(function() {
	fsm.def('game', function() {
		console.info('[GAME]');


		var form = $('<form/>');



		var input = $('<input/>').attr({
			placeholder: 'Si necesito ayuda deberia escribirlo...'
		}).keypress(function(e) {
			if (e.which == 13) {
				
				console.log('[Order]' + $(this).val());
				display.add($(this).val());
				display.addArr(commands.proccess($(this).val()));
				$(this).val('');

				// /event.preventDefault();
				return false;
			}
		});

		form.append([display.render(), input]);
		$('#stateContainer').empty().append(form);

		settings.load();

	});
})();


/*

var map = level.render();
		snapMove.create(map);

var snapMove = {
	_update: function(elem, target) {
		var left = parseInt(elem.css('left').toString().replace('px', ''));
		left = parseInt(left) + parseInt(target.left);
		var top = parseInt(elem.css('top').toString().replace('px', ''));
		top = parseInt(top) + parseInt(target.top);
		//elem.animate({left:left},100);
		anim(elem[0], {
			left: left
		}, 1, "ease");
		anim(elem[0], {
			top: top
		}, 1, "ease");
	},
	create: function(elem) {
		elem.css('left', 0);
		var self = this;
		Mousetrap.bind('d', function() {
			self._update(elem, {
				left: -120,
				top: 0
			});
		});
		Mousetrap.bind('a', function() {
			self._update(elem, {
				left: 120,
				top: 0
			});
		});
		Mousetrap.bind('w', function() {
			self._update(elem, {
				top: 50,
				left: 0
			});
		});
		Mousetrap.bind('s', function() {
			self._update(elem, {
				top: -50,
				left: 0
			});
		});
	}
}


*/
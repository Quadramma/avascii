$('html,body').css({

	'overflow': 'hidden'

});


var settings = {
	chapter: 1,
	stage: 1,
	INVENTARIO_CANTIDAD_ELEMENTOS_POR_FILA: 5,
	getLocation: function() {
		return 'chapter' + this.chapter + 'stage' + this.stage;
	},
	load: function() {
		console.info('loading ' + this.getLocation());
		fsm.go(this.getLocation());
	}
};
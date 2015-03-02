var items = {
	arr: {}, // {name:''}
	has: function(name) {
		return !_.isUndefined(this.arr[name]) && this.arr[name].enabled == true;
	},
	get: function(name) {
		return this.arr[name];
	},
	getall: function() {
		var items = [];
		for (var x in this.arr) {
			if (!_.isUndefined(this.arr[x]) && this.arr[x].enabled == true) {
				var str = '';
				items.push(x + str);
			}
		}
		//dividir en arr de 5 y jsonear
		var rta = [];
		var jsonarr = [];
		for (var y = 0; y < items.length; y++) {
			if (jsonarr.length === this.INVENTARIO_CANTIDAD_ELEMENTOS_POR_FILA) {
				rta.push(JSON.stringify(jsonarr));
				jsonarr = [];
			}
			jsonarr.push(items[y]);
		}
		if (jsonarr.length > 0) {
			rta.push(JSON.stringify(jsonarr));
		}
		return rta;
	},
	add: function(item) {
		item.enabled = true;
		this.arr[item.name] = item;
	},
	init: function(items) {
		for (var x in items) {
			var item = items[x];
			this.add(item);
		}
	},
	remove: function(name) {
		if (!_.isUndefined(this.arr[name])) {
			this.arr[name].enabled = false;
		}
	},
	removeAll: function() {
		this.arr = {};
	},

	'pistola': {
		name: 'pistola',
		mirar: ['Es una pistola calibre .22', 'Siempre la llevo conmigo.', 'Mi padre me la regalo cuando cumpli 8']
	},
	'anteojos': {
		name: 'anteojos',
		mirar: ['Estan un poco sucios.']
	},
	'manzana': {
		name: 'manzana',
		mirar: ['Esta chica y fea.', 'Dicen que son las mejores.']
	},
	'varilla': {
		name: 'varilla',
		mirar: ['Es una varilla metalica oxidad.', 'tiene un trozo de piedra en un borde, se debio desprender de la pared en algun momento.']
	},
	'manual': {
		name: 'manual',
		mirar: [
			'#Manual de supervivencia: Cap IXX "Comandos"',
			'- "describir" (describe ubicacion)',
			'- "[hablar,luchar,inspeccionar,tomar] [sujeto][objeto]"',
			'- "combinar [objeto][sujeto] con [objeto][sujeto]"',
			'- "mirar [objeto][sujeto][direccion]"',
			'- "usar [objeto]"',
			'- "ir 	 [direccion][lugar]"',
			function() {
				setTimeout(function() {
					display.clear();
					display.addArr(['Rayos!, Se me cayo al agua!.', 'Estas cosas suelen pasar.']);
					items.remove('manual');

					commands.add('chapter1stage1', function(command) {
						if ('mirar abajo' === command) {
							return ['El manual esta en el agua.'];
						}
						if ('tomar manual' === command) {
							return ['No tiene sentido, esta todo estropeado.'];
						}
					});

				}, 5000);
			}
		]
	}


}
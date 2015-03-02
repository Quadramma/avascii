var commands = {
	arr: {},
	general: null,
	add: function(id, fn) {
		console.info('commands.add');
		console.info(id);
		if (_.isUndefined(this.arr[id])) {
			this.arr[id] = [];
		}
		this.arr[id].push(fn);

		console.info('id ' + id);
		console.info(typeof this.arr[id]);
	},
	normalize: function(command) {
		return command.toString().toLowerCase();
	},
	proccess: function(command) {
		console.info('commands.proccess');

		var id = settings.getLocation();

		console.info('id ' + id);
		console.info(typeof this.arr[id]);

		if (!_.isUndefined(this.arr[id])) {
			var rta = [];
			for (var x in this.arr[id]) {
				var fn = this.arr[id][x];
				var partialrta = fn(this.normalize(command));
				if (!_.isUndefined(partialrta)) {
					rta = _.union(rta, partialrta);
				}
			}
			if (rta.length > 0) {

				return rta;
			} else {

				return this.general(this.normalize(command));
			}

		} else {
			console.info(this.arr[id]);
		}
	},
	proccessArr: function(command, arr) {
		var rta = [];
		for (var x in arr) {
			var commandarr = arr[x];
			var oneCommand = commandarr[0];
			var oneAnswer = commandarr[1];
			if (this.normalize(command) == this.normalize(oneCommand)) {
				rta.push(oneAnswer);
			}
		}
		if (rta.length > 0) return rta;
	}
}



//general commands
commands.general = function(command) {

	if (command.indexOf('mirar') >= 0) {
		var obj = command.replace(' ', '').replace('mirar', '');

		if (obj.length > 0 && items.has(obj)) {
			return items.get(obj).mirar;
		}
	}


	if (_.includes(['inventario', 'inv'], command)) {
		return items.getall();
	}


	if (_.includes(['donde estoy', 'que es esto', 'como hago'], command)) {
		return ['No creo que alguien pueda responder a eso.']
	}
	if (_.includes(['mierda', 'pero que juego de mierda'], command)) {
		return ['Opino lo mismo.'];
	}
	if (_.includes(['escapar', 'ganar', 'escape', 'win'], command)) {
		return ['Ojala fuera tan facil.']
	}

	if (_.includes(['mirar'], command)) {
		return ['mirar que?.']
	}

	if (_.includes(['abrir'], command)) {
		return ['abrir que?.']
	}

	if (_.includes(['ayuda'], command)) {
		return ['Creo que estoy solo en esta.'];
	}

	if (_.includes(['Correr'], command)) {
		return ['Donde?'];
	}

	if (_.includes(['Comer'], command)) {
		return ['Comer'];
	}

	if (_.includes(['Retroceder'], command)) {
		return ['No puedo.'];
	}

	if (_.includes(['avanzar'], command)) {
		return ['Ahora mismo no puedo.'];
	}


	var insultos = commands.proccessArr(command, [
		['puta madre', 'Eso mismo pienso yo.'],
		['joder', 'Mi abuela diria lo mismo'],
		['me cago en la leche', '... Leches!.'],
		['shit', 'Caca, mierda!'],
		['gilipollas', 'Creo que estoy hablando solo']
	]);
	if (!_.isUndefined(insultos)) return insultos;


	//if (commands.normalize(command) === '') {}
	return ['No estoy seguro de que eso tenga sentido.'];
};
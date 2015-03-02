 //module.export

 //Caverna


 (function() {
 	//
 	var _defname = 'chapter1stage1';
 	fsm.def(_defname, function(p) {
 		settings.chapter = 1;
 		settings.stage = 1;

 		items.init([
 			items.manual, items.pistola, items.anteojos, items.manzana
 		]);

 		var rejillaDestrabada = false;

 		//commands
 		if (_.isUndefined(commands.arr[_defname])) {
 			//commands definitions
 			commands.add(_defname, function(command) {


 				if (items.has('manual') && command === 'ayuda') {
 					return [
 						'Nadie puede escucharme aqui abajo.',
 						'Tengo un manual de instrucciones conmigo,',
 						'sera mejor que lo mire, esta en mi inventario.'
 					];
 				}


 				if (command === 'describir') {
 					return ['Estoy en un pozo ciego', 'Esta oscuro, por cierto.'];
 				}

 				if (command === 'tomar varilla') {
 					if (!items.has('varilla')) {
 						items.add(items.varilla);
 						return ['Con un poco de esfuerzo logro retirar la varilla por la grieta'];
 					} else {
 						return ['La tengo conmigo'];
 					}
 				}

 				if (items.has('varilla') && command === 'combinar varilla rejilla') {
 					rejillaDestrabada = true;
 					return ['Bingo!, logre destrabajar la rejilla, el agua esta bajando. Solo debo "avanzar."'];
 				}

 				if (command == 'ir abajo') {
 					if (rejillaDestrabada) {
 						advance();
 					} else {
 						return ['Hay una rejilla. Es imposible.'];
 					}
 				}

 				if (command == 'comer manzana' && items.has('manzana')) {
 					items.remove('manzana');
 					return ['Estaba rica, un poco acida.'];
 				}

 				if (command == 'avanzar' && rejillaDestrabada) {
 					advance();
 				}

 				function advance() {
 					setTimeout(function() {
 						fsm.go('chapter1stage2');
 					}, 3000);
 					return ['Me deslizo por el aujero de la rejilla y caigo a un tunel totalmente inundado. Es hora de nadar.'];
 				}

 				var ir = commands.proccessArr(command, [
 					['ir arriba', 'Si tan solo pudiera volar.'],
 					['ir izquierda', 'La pared esta a centimetros mio.'],
 					['ir derecha', 'La pared esta a centimetros mio.'],

 				]);
 				if (!_.isUndefined(ir)) return ir;

 				var mirar = commands.proccessArr(command, [
 					['mirar arriba', 'No alcanzo a ver nada.'],
 					['mirar arriba', 'Esta muy oscuro.'],
 					['mirar pared', 'Es una pared rocosa con musgo'],
 					['mirar derecha', 'Es una pared rocosa con musgo'],
 					['mirar izquierda', 'Es una pared rocosa con musgo'],
 					['mirar izquierda', 'Hay grieta por donde entra mi mano'],
 					['mirar abajo', 'Tengo los pies empapados'],
 					['mirar suelo', 'El suelo esta inundado'],
 					['mirar abajo', 'El suelo esta inundado'],
 					['mirar abajo', 'El agua me llega hasta los talones'],
 					['mirar abajo', 'Hay una rejilla en el suelo'],
 					['mirar grieta', 'Parece una grieta natural'],
 					['mirar grieta', 'Puedo divisar una luz si pego el ojo'],
 					['mirar grieta', 'Creo que puede meter mi brazo aqui'],
 					['mirar grieta', 'Hay una varilla del otro lado?'],
 					['mirar rejilla', 'Esta tapada por el agua'],
 					['mirar rejilla', 'No parece que estuviera sujeta al suelo'],
 				]);
 				if (!_.isUndefined(mirar)) return mirar;
 			});
 		}
 	});
 	//
 })()
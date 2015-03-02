 //module.export


 (function() {
 	//
 	//Caverna
 	var _defname = 'chapter1stage2';
 	fsm.def(_defname, function(p) {
 		settings.chapter = 1;
 		settings.stage = 2;

 		items.init([
 			items.pistola, items.manzana
 		]);

 		commands.add(_defname, function(command) {

 			if (command === 'describir') {
 				return [
 					'El tunel parece de la Edad Media.'

 					, 'Varios destellos de luz ingresan por diferentes huecos en el techo,'

 					, 'diviso rejillas en lo alto de cada hueco, recuerdo haberlas visto en la superficie.'

 					, 'El agua esta congelada.'
 				];
 			}

 			var mirar = commands.proccessArr(command, [
 				['mirar arriba', 'El techo tiene varios huecos con rejillas en lo alto.'],
 				['mirar arriba', 'Puedo ver la luz que proviene del exterior.'],
 				['mirar pared', 'Es una pared rocosa con musgo'],
 				['mirar derecha', 'La pared se eleva varios metros, pero esta cubierta de agua hasta la mitad'],
 				['mirar derecha', 'Los anteojos en el borde.'],
 				['mirar izquierda', 'La pared se eleva varios metros, pero esta cubierta de agua hasta la mitad'],
 				['mirar abajo', 'El agua no es clara, no puedo ver nada'],
 				['mirar suelo', 'No puedo divisar el suelo, pero si lo intento hago pie, deben ser dos metros de profundidad.'],
 				['mirar puerta', 'La puerta es inmensa y esta sellada, parece que lleva tiempo de esa forma.'],
 				['mirar anteojos', 'El cristal esta despedazado, menuda caida tio.'],
 				['ir arriba', 'Me gustaria'],
 				['ir abajo', 'Me sumergo y buceo un poco pero no puedo encontrar nada de utilidad.'],
 				['ir derecha', 'Solo hay pared'],
 				['ir izquierda', 'Pared']
 			]);
 			if (!_.isUndefined(mirar)) return mirar;

 			if (command === 'tomar anteojos') {
 				return ['No vale la pena, el cristal esta roto'];
 			}

 			if (command === 'avanzar') {
 				return ['Estoy nadando hacia adelante, hay una puerta pero parece sellada'];
 			}



 			if (command === 'combinar varilla puerta') {
 				return ['Itento hacer palanca pero no pasa nada. La puerta es muy pesada y hay agua por todas partes.'];
 			}


 		});

 		display.clear();
 		display.addArr([
 			'La caida es de varios metros y pierdo los anteojos, el agua me llega hasta el pecho.'
 		]);


 	});
 	//
 })();
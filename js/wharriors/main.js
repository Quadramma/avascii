"use strict";

//var debug = require('./debug');
var debug = debug;
//var fsm = require('./debug');
var fsm = fsm;
$(function() {
	debug.wrap(function() {
		//define a dom element to operate states
		$('<div/>').attr('id', 'stateContainer').appendTo($('body'));
		//require('./def.intro')();
		introDef();
		//require('./def.menu')();
		menuDef();
		//require('./def.game')();
		fsm.go('game');
	});
})
var fsm = {
	currentStateName: '',
	arr: {},
	evts: {},
	curr: function(n) {
		return this.currentStateName.toString().toLowerCase() == n.toString().toLowerCase();
	},
	def: function(name, state) {
		this.arr[name] = state;
	},
	go: function(name,args) {
		if (_.isUndefined(this.arr[name])) {
			console.info('Falta implementacion -> ' + name);
			return;
		}
		this.emit('before' + this.currentStateName + '-to-' + name);
		this.currentStateName = name;
		this.arr[name](args);
		this.emit('after' + this.currentStateName + '-to-' + name);
	},
	before: function(fromState, toState, fn) {
		this.on('before-' + fromState + "-to-" + toState, fn);
	},
	after: function(fromState, toState, fn) {
		this.on('after-' + fromState + "-to-" + toState, fn);
	},
	on: function(name, fn) {
		if (_.isUndefined(this.evts[name])) {
			this.evts[name] = [];
		}
		this.evts[name].push(fn);
	},
	emit: function(name, p) {
		if (_.isUndefined(this.evts[name])) return;
		for (var x in this.evts[name]) {
			this.evts[name][x](p);
		}
	}
}
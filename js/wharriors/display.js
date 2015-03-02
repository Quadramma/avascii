var display = {
	description: 'Represents a textarea inteligent component',
	arr: [],
	render: function() {
		this.elem = $('<textarea>').attr({
			rows: 10,
			cols: 50
		});
		return this.elem;
	},
	clear: function() {
		this.arr= [];
		this.elem.empty();
	},
	add: function(str) {
		this.arr.push(str);
		var self = this;
		if (this.arr.length == 10) {
			this.arr = _.drop(this.arr, 1);
			this.elem.html('');
			_.forEach(this.arr, function(n, k) {
				self.elem.html(self.elem.html() + n + "\n");
			});
			//console.log(JSON.stringify(this.arr));
		} else {
			this.elem.html(this.elem.html() + str + "\n");
		}

	},
	addArr: function(arr) {
		for (var x in arr) {


			//special case
			if (typeof arr[x] == 'function') {
				arr[x]();
			} else {
				this.add(arr[x]);
			}


		}
	}
}
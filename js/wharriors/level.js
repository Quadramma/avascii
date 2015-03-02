//level.js


var level = {
	size: {
		w: 1024,
		h: 1024
	},
	render: function() {
		var map = $('<div>')
			.attr({
				id: 'map'
			})
			.css({
				width: this.size.w,
				height: this.size.h,
				//float: 'left',
				position: 'absolute',
				//top: 0,
				//left: 0,
				'background-color': 'orange'

			});



		return map;
	}

};
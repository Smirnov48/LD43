class Map {

	constructor(game) {
		for (var i = 0; i < 100; i++) {
			var x = Math.random() * 100;
			var y = Math.random() * 100;
			new Tree(game, x, y);
		}
	}

}
class Road {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'road');
	}

	move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

}
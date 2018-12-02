class Mount {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'mount');
	}

	move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

}
class DeepWater {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'deepWater');
	}

	move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
	}
}
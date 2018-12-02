class Grass {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'grass');
	}

	move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

}
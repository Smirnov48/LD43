class Tree {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'tree');
	}

	move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

	toTop() {
		this.sprite.setDepth(1);
	}
}
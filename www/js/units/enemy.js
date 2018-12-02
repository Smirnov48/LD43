class Enemy {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'enemy');
	}

	update(game, time, delta){
		this.sprite.setDepth(1);
	}

	move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

}
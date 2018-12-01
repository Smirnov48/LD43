class Player {

	constructor(game) {
		this.sprite = game.physics.add.image(70, 50, 'player');
		this.keys = game.input.keyboard.createCursorKeys();
	}

	update(time, delta){
		if (this.keys.left.isDown) {
			this.sprite.setVelocityX(-50);
		} else if (this.keys.right.isDown) {
			this.sprite.setVelocityX(50);
		} else if (this.keys.up.isDown) {
			this.sprite.setVelocityY(-50);
		} else if (this.keys.down.isDown) {
			this.sprite.setVelocityY(50);
		} else {
			this.sprite.setVelocityX(0);
			this.sprite.setVelocityY(0);
		}
	}

}
class Player {

	constructor(game) {
		this.sprite = game.add.image(70, 50, 'player');
		this.keys = game.input.keyboard.createCursorKeys();
	}

	update(time, delta){
		if (this.keys.left.isDown) {
			this.sprite.x -= 5;
		} else if (this.keys.right.isDown) {
			this.sprite.x += 5;
		} else if (this.keys.up.isDown) {
			this.sprite.y -= 5;
		} else if (this.keys.down.isDown) {
			this.sprite.y += 5;
		} 
	}

}
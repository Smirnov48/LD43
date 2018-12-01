class Player {

	constructor(game) {
		this.sprite = game.add.image(70, 50, 'player');
		this.keys = game.input.keyboard.createCursorKeys();
	}

	update(time, delta){
		if (this.keys.left.isDown) {
		} else if (this.keys.right.isDown) {
		} else if (this.keys.up.isDown) {
		} else if (this.keys.down.isDown) {
		} else {
		}
	}

}
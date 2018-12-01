class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}

	preload() {
		this.load.image('player', 'assets/krolik.png');
	}

	create () {
		player = this.add.sprite(70, 50, 'player');
		player.setBounce(0.2);
		player.setCollideWorldBounds(true);
		keys = this.input.keyboard.createCursorKeys();
	}

	update(time, delta){
		if (keys.left.isDown) {
			player.setVelocityX(-160);
			//player.anims.play('left', true);
		} else if (keys.right.isDown) {
			player.setVelocityX(160);
			//player.anims.play('right', true);
		} else if (keys.up.isDown) {
			player.setVelocityY(160);
			//player.anims.play('right', true);
		} else if (keys.down.isDown) {
			player.setVelocityY(-160);
			//player.anims.play('right', true);
		} else {
			player.setVelocityX(0);
			//player.anims.play('stop');
}
	}

}
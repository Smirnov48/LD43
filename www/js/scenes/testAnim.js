class TestAnim extends Phaser.Scene {

	constructor() {
		super( { key: 'TestAnim'});
	}

	preload () {
		this.load.image('map', 'assets/map.png');
		this.load.image('enemy', 'assets/enemy.png');
		this.load.spritesheet('player', 'assets/krolikk.png', { frameWidth: 60, frameHeight: 60 });
		this.load.image('tree', 'assets/tree.png');
		this.load.image('water', 'assets/water.png');
		this.load.image('grass', 'assets/grass.png');

		this.keys = this.input.keyboard.addKeys('Y'); 
	}

	create () {
		this.cameras.main.setBackgroundColor('rgba(0, 255, 0, 0.5)');
		new Tree(this, 300, 300);

		this.sprite = this.physics.add.sprite(450, 240, 'player');

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('player', { start:0, end:3 }),
			frameRate: 10,
			repeat: -1
		});
		this.sprite.anims.play('left', true);
	}


	update(time, delta){
		if (this.keys.Y.isDown) {
			this.scene.start('Game');
		}
	}

}
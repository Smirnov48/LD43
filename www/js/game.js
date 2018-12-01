class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}

	preload () {
		this.load.image('fon', 'assets/fonTest.png');
		this.load.image('npc1', 'assets/зшвщк.png');
		this.load.spritesheet('player', 'assets/krolikk.png', { frameWidth: 60, frameHeight: 60 });
	}

	create () {
		this.add.image(200, 300, 'fon');
		var npc11 = this.physics.add.sprite(400, 300, 'npc1');
        npc11.setBounce(0.2);
	    npc11.setCollideWorldBounds(true);
        npc11.setVelocityX(Math.random(20));
        npc11.setVelocityY(Math.random(20));

		this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');
		this.player = new Player(this);

	}

	update(time, delta){
		this.player.update();
	}

}
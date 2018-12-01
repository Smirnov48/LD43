class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}

	preload () {
		this.load.image('npc1', 'assets/зшвщк.png');
		this.load.spritesheet('player', 'assets/krolikk.png', { frameWidth: 60, frameHeight: 60 });
	}

	create () {
		this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');

		this.player = new Player(this);

		this.enemy = new Enemy(this);
	}

	update(time, delta){
		this.player.update();
		this.enemy.update();
	}

}
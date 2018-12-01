class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}

	preload() {
		this.load.image('player', 'assets/krolik.png');
	}

	create () {
		this.player = new Player(this);
	}

	update(time, delta){
		this.player.update();
	}

}
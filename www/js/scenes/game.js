class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}

	preload () {
		this.load.image('map', 'assets/map.png');
		this.load.image('enemy', 'assets/enemy.png');
		this.load.spritesheet('player', 'assets/krolikk.png', { frameWidth: 60, frameHeight: 60 });
		this.load.image('tree', 'assets/tree.png');
		this.load.image('water', 'assets/water.png');
		this.load.image('grass', 'assets/grass.png');
	}

	create () {
		this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');

		this.map = new Map(this);

		this.player = new Player(this);

		this.playerPosition = this.map.getStartPosition();
	}

	render(){

	}

	update(time, delta){
		this.player.update();

		this.render();
	}

}
class TestAnim extends Phaser.Scene {

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
		this.poolObjects = new PoolObjects(this);

		var spawnPlayerCoord = this.map.getStartPosition();
		this.render(spawnPlayerCoord);
		this.player = new Player(this, spawnPlayerCoord);

		this.keysWASD = game.input.keyboard.addKeys('Y'); 
	}


	update(time, delta){
		this.player.update();
		this.render(this.player.getPosition());
		this.player.toTop();

		if (this.keysWASD.Y.isDown) {
			this.scene.start('Game');
		}
	}

}
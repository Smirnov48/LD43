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
		this.poolObjects = new PoolObjects(this);

		var spawnPlayerCoord = this.map.getStartPosition();
		this.render(spawnPlayerCoord);
		this.player = new Player(this, spawnPlayerCoord);

		this.keys = this.input.keyboard.addKeys('P'); 
	}

	render(playerPosition){
		this.poolObjects.begin();
		var widthRender = 10;
		var heightRender = 9;

		playerPosition.x = Math.floor(playerPosition.r_x / 67);
		playerPosition.y = Math.floor(playerPosition.r_y / 67);

		var offsetX = Math.floor(playerPosition.r_x % 67);
		var offsetY = Math.floor(playerPosition.r_y % 67);

		for (var i = playerPosition.x - widthRender; i < playerPosition.x + widthRender; i++) {
			for (var j = playerPosition.y - heightRender; j < playerPosition.y + heightRender; j++) {
				var x = (i - playerPosition.x)  * 67 + 480 - 30 - offsetX;
				var y = (j - playerPosition.y) * 67 + 270 - 30 - offsetY;

				var tileCode = this.map.getTileCode(i, j);
				switch (tileCode){
					case Map.ID_START_POSITION:
					case Map.ID_TREE:
					case Map.ID_GRASS:
						this.poolObjects.placeGrass(x, y);
					break;
					case Map.ID_WATER:
						this.poolObjects.placeWater(x, y);						
					break;
				}
			}
		}
		for (var i = playerPosition.x - widthRender; i < playerPosition.x + widthRender; i++) {
			for (var j = playerPosition.y - heightRender; j < playerPosition.y + heightRender; j++) {
				var x = (i - playerPosition.x)  * 67 + 480 - 30 - offsetX;
				var y = (j - playerPosition.y) * 67 + 270 - 30 - offsetY;

				var tileCode = this.map.getTileCode(i, j);
				switch (tileCode){
					case Map.ID_TREE:
						this.poolObjects.placeTree(x, y);	
					break;				
				}
			}
		}
		this.poolObjects.end();
	}

	update(time, delta){
		this.player.update();
		this.render(this.player.getPosition());
		this.player.toTop();

		if (this.keys.P.isDown) {
			this.scene.start('TestAnim');
		}
	}

}
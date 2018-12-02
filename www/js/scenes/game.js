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
		var widthRender = 10;
		var heightRender = 5;
		for (var i = this.playerPosition.x - widthRender; i < this.playerPosition.x + widthRender; i++) {
			for (var j = this.playerPosition.y - heightRender; j < this.playerPosition.y + heightRender; j++) {
				var x = (i - this.playerPosition.x)  * 67;
				var y = (j - this.playerPosition.y) * 67;

				var tileCode = this.map.getTileCode(i, j);
				switch (tileCode){
					case Map.ID_TREE:
					case Map.ID_GRASS:
						new Grass(this, x, y);
					break;
					case Map.ID_WATER:
						new Water(this, x, y);
					break;
				}
			}
		}
		for (var i = this.playerPosition.x - widthRender; i < this.playerPosition.x + widthRender; i++) {
			for (var j = this.playerPosition.y - heightRender; j < this.playerPosition.y + heightRender; j++) {
				var x = (i - this.playerPosition.x)  * 67;
				var y = (j - this.playerPosition.y) * 67;

				var tileCode = this.map.getTileCode(i, j);
				switch (tileCode){
					case Map.ID_TREE:
						new Tree(this, x, y);
					break;				
				}
			}
		}
	}

	update(time, delta){
		this.player.update();

		this.render();
	}

}
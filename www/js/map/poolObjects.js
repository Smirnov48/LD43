class PoolObjects {
//new Grass(this, x, y);
//new Water(this, x, y);
//new Tree(this, x, y);

	constructor(game) {
		this.game = game;
		this.grassCount = 0;
		this.grass = new Array();
		this.grassCount = 0;
		this.water = new Array();
		this.treeCount = 0;
		this.tree = new Array();
	}

	begin() {
		this.grassCount = 0;
		this.waterCount = 0;
		this.treeCount = 0;
	}

	end() {
		if (this.grassCount < this.grass.length) {
			for(var i = this.grassCount; i < this.grass.length; i++) {
				this.grass[i].move(-70, -70);
			}
		}
	}

	placeGrass(x, y) {
		if (this.grassCount >= this.grass.length) {
			this.grass.push(new Grass(this.game, x, y));
		} else {
			this.grass[this.grassCount].move(x,y);
		}
		this.grassCount++;
	}

	placeWater(x, y) {
		
	}

	placeTree(x, y) {

	}

}
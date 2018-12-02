class PoolObjects {
//new Grass(this, x, y);
//new Water(this, x, y);
//new Tree(this, x, y);

	constructor(game) {
		this.game = game;

		this.grassCount = 0;
		this.grass = new Array();
		this.waterCount = 0;
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
		if (this.waterCount < this.water.length) {
			for(var i = this.waterCount; i < this.water.length; i++) {
				this.water[i].move(-70, -70);
			}
		}
		if (this.treeCount < this.tree.length) {
			for(var i = this.treeCount; i < this.tree.length; i++) {
				this.tree[i].move(-70, -70);
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
		if (this.waterCount >= this.water.length) {
			this.water.push(new Water(this.game, x, y));
		} else {
			this.water[this.waterCount].move(x,y);
		}
		this.waterCount++;
	}

	placeTree(x, y) {
		if (this.treeCount >= this.tree.length) {
			this.tree.push(new Tree(this.game, x, y));
		} else {
			this.tree[this.treeCount].move(x,y);
		}
		this.treeCount++;
	}

}
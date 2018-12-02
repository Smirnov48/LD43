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
		this.beachCount = 0;
		this.beach = new Array();
		this.deepWaterCount = 0;
		this.deepWater = new Array();
		this.enemy1Count = 0;
        this.enemy1 = new Array();
	}

	begin() {
		this.grassCount = 0;
		this.waterCount = 0;
		this.treeCount = 0;
		this.beachCount = 0;
		this.deepWaterCount = 0;
		 this.enemy1Count = 0;
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


        if (this.enemy1Count < this.enemy1.length) {
			for(var i = this.enemy1Count; i < this.enemy1.length; i++) {
				this.enemy1[i].move(-70, -70);
			}
		}
		if (this.beachCount < this.beach.length) {
			for(var i = this.beachCount; i < this.beach.length; i++) {
				this.beach[i].move(-70, -70);
			}
		}
		if (this.deepWaterCount < this.deepWater.length) {
			for(var i = this.deepWaterCount; i < this.deepWater.length; i++) {
				this.deepWater[i].move(-70, -70);
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

    placeEnemy1(x, y) {
		if (this.enemy1Count >= this.enemy1.length) {
			this.enemy1.push(new Enemy1(this.game, x, y));
		} else {
			this.enemy1[this.enemy1Count].move(x,y);
		}
		this.enemy1Count++;
	}

    placeBeach(x, y) {
		if (this.beachCount >= this.beach.length) {
			this.beach.push(new Beach(this.game, x, y));
		} else {
			this.beach[this.beachCount].move(x,y);
		}
		this.beachCount++;
	}

    placeDeepWater(x, y) {
		if (this.deepWaterCount >= this.deepWater.length) {
			this.deepWater.push(new DeepWater(this.game, x, y));
		} else {
			this.deepWater[this.deepWaterCount].move(x,y);
		}
		this.deepWaterCount++;
	}




}
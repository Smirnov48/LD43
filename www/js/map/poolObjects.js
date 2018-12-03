class PoolObjects {

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

        this.grassStepCount = 0;
        this.grassStep = new Array();

        this.mountCount = 0;
        this.mount = new Array();

        this.mountRoadCount = 0;
        this.mountRoad = new Array();

        this.roadCount = 0;
        this.road = new Array();

        this.enemies = {};
	}

	begin() {
		this.grassCount = 0;
		this.waterCount = 0;
		this.treeCount = 0;
		this.beachCount = 0;
		this.deepWaterCount = 0;
		this.enemyCount = 0;
		this.grassStepCount = 0;
		this.mountRoadCount = 0;
		this.mountCount = 0;
		this.roadCount = 0;
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

		if (this.mountCount < this.mount.length) {
			for(var i = this.mountCount; i < this.mount.length; i++) {
				this.mount[i].move(-70, -70);
			}
		}

		if (this.mountRoadCount < this.mountRoad.length) {
			for(var i = this.mountRoadCount; i < this.mountRoad.length; i++) {
				this.mountRoad[i].move(-70, -70);
			}
		}
		if (this.grassStepCount < this.grassStep.length) {
			for(var i = this.grassStepCount; i < this.grassStep.length; i++) {
				this.grassStep[i].move(-70, -70);
			}
		}
		if (this.roadCount < this.road.length) {
			for(var i = this.roadCount; i < this.road.length; i++) {
				this.road[i].move(-70, -70);
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
		this.tree[this.treeCount].toTop();
		this.treeCount++;
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

	 placeMount(x, y) {
		if (this.mountCount >= this.mount.length) {
			this.mount.push(new Mount(this.game, x, y));
		} else {
			this.mount[this.mountCount].move(x,y);
		}
		this.mountCount++;
	}

    placeMountRoad(x, y) {
		if (this.mountRoadCount >= this.mountRoad.length) {
			this.mountRoad.push(new MountRoad(this.game, x, y));
		} else {
			this.mountRoad[this.mountRoadCount].move(x,y);
		}
		this.mountRoadCount++;
	}

    placeGrassStep(x, y) {
		if (this.grassStepCount >= this.grassStep.length) {
			this.grassStep.push(new GrassStep(this.game, x, y));
		} else {
			this.grassStep[this.grassStepCount].move(x,y);
		}
		this.grassStepCount++;
	}
	
	placeRoad(x, y) {
		if (this.roadCount >= this.road.length) {
			this.road.push(new Road(this.game, x, y));
		} else {
			this.road[this.roadCount].move(x,y);
		}
		this.roadCount++;
	}

	makeEnemy(game, x, y, i, j) {
		if (!this.enemies[i + " " + j]) {
			this.enemies[i + " " + j] = new Enemy(game, x, y, i, j);
		}
	}
	
	update(game, time, delta, player) {
		for (var id in this.enemies) {
			this.enemies[id].update(game, time, delta, player);
		};
	}
}
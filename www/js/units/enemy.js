class Enemy {

	constructor(game, x, y, i, j) {
		this.coords = { 
					"r_x" : i * Map.TILE_WIDTH, 
					"r_y" : j * Map.TILE_HEIGHT,
					"x" : i,
					"y" : j
		}
		this.sprite = game.physics.add.sprite(x, y, 'enemy');
	}

	update(game, time, delta, player){
		this.sprite.setDepth(1);

		var playerPos = player.getPosition();

		this.coords.r_x +=  (playerPos.r_x - this.coords.r_x) / 128;
		this.coords.r_y +=  (playerPos.r_y - this.coords.r_y) / 128;

		this.sprite.x = this.coords.r_x - playerPos.r_x + 480 - 15;
		this.sprite.y = this.coords.r_y - playerPos.r_y + 270 - 50;
	}

}
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

		this.coords.r_x +=  (playerPos.r_x - this.coords.r_x)/256;
		this.coords.r_y +=  (playerPos.r_y - this.coords.r_y)/256;


		var i = Math.floor(this.coords.r_x/ 67);
		var j = Math.floor(this.coords.r_y / 67);
		var offsetX = Math.floor(this.coords.r_x % 67);
		var offsetY = Math.floor(this.coords.r_y % 67);

		this.sprite.x =  (i - playerPos.x)  * 67 + 480 - 30 + offsetX;
		this.sprite.y =  (j - playerPos.y) * 67 + 270 - 30 + offsetY;
	}

}
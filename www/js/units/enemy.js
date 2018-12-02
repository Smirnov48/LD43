class Enemy {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'enemy');
	}

	update(game, time, delta, player){
		this.sprite.setDepth(1);

		var playerPos = player.getScreenPosition();

		this.sprite.x += (playerPos.x - this.sprite.x)/256;
		this.sprite.y += (playerPos.y - this.sprite.y)/256;
	}

}
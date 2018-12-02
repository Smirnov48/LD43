class Enemy1 {

	constructor(game, x, y) {
		this.sprite = game.physics.add.sprite(x, y, 'enemy11');
		//npc11.setBounce(0.3);
		//npc11.setCollideWorldBounds(true);
		//npc11.setVelocityX(50);
		//npc11.setVelocityY(50);
	}

	update(time, delta){
	}

move(x, y) {
		this.sprite.x = x;
		this.sprite.y = y;
}

}
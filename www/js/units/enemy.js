class Enemy {

	constructor(game) {
		var npc11 = game.physics.add.sprite(400, 300, 'enemy');
		npc11.setBounce(0.2);
		npc11.setCollideWorldBounds(true);
		npc11.setVelocityX(50);
		npc11.setVelocityY(50);
	}

	update(time, delta){
	}

}
var level1 = new Phaser.Scene('Level1');

level1.preload = function () {
    this.load.spritesheet('dude', 'dude.png', { frameWidth: 50, frameHeight: 50});
	this.load.image('arrow', 'arrow.png')
}

level1.create = function () {
	
	this.cameras.main.setBounds(0, 0, 1200, 1000);
	this.physics.world.setBounds(0, 0, 1200, 1000);

	player = this.physics.add.sprite(70, 50, 'dude', 4);
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);

	this.physics.add.collider(player);

	this.anims.create({
		key: 'run',
		
	});
	
	this.cameras.main.startFollow(player);

	keys = this.input.keyboard.createCursorKeys();

	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('dude', { start:4, end:7 }),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'stop',
		frames: [ {key:'dude', frame: 3} ]
	});

	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('dude', { start:0, end:3 }),
		frameRate: 10,
		repeat: -1
	}); 		
this.anims.create({
		key: 'up',
		frames: this.anims.generateFrameNumbers('dude', { start:8, end:11 }),
		frameRate: 10,
		repeat: -1
	}); 		
this.anims.create({
		key: 'bottom',
		frames: this.anims.generateFrameNumbers('dude', { start:12, end:15 }),
		frameRate: 10,
		repeat: -1
	}); 		


	arrow = this.physics.add.image(1100, 0, 'arrow');
	arrow.setCollideWorldBounds(true);
	this.physics.add.overlap(player, arrow, hitArrow);
}

level1.update = function () {
	if (level1.flag) {
		this.scene.start('Level2');
		return;
	}
	if (keys.left.isDown) {
		player.setVelocityX(-160);
		player.anims.play('left', true);
	} else if (keys.right.isDown) {
		player.setVelocityX(160);
		player.anims.play('right', true);
	} else {
		player.setVelocityX(0);
		player.anims.play('stop');
	}
	if (keys.up.isDown && (player.body.touching.down || player.y >= 275)) {
		player.setVelocityY(-330);
	}
}

;

function hitArrow(player, arrow){
	level1.flag = true;
}
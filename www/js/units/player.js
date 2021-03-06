class Player {

	constructor(game, spawnCoord) {
		this.coords = spawnCoord;

		this.sprite = game.physics.add.sprite(450, 240, 'player');
		this.keys = game.input.keyboard.createCursorKeys();
		this.keysWASD = game.input.keyboard.addKeys('W,A,S,D'); 
		game.anims.create({
			key: 'left',
			frames: game.anims.generateFrameNumbers('player', { start:4, end:7 }),
			frameRate: 10,
			repeat: -1
		});
		game.anims.create({
			key: 'down',
			frames: game.anims.generateFrameNumbers('player', { start:12, end:15 }),
			frameRate: 10,
			repeat: -1
		});
		game.anims.create({
			key: 'up',
			frames: game.anims.generateFrameNumbers('player', { start:8, end:11 }),
			frameRate: 10,
			repeat: -1
		});

		game.anims.create({
			key:'stop',
			frames: [ {key:'player', frame: 12} ]
		});

		game.anims.create({
			key: 'right',
			frames: game.anims.generateFrameNumbers('player', { start:0, end:3 }),
			frameRate: 10,
			repeat: -1
		});

		game.anims.create({
			key: 'playerRun',
			frames: game.anims.generateFrameNumbers('playerRun', { start:0, end:1 }),
			frameRate: 10,
			repeat: -1
		});

	}

	update(time, delta){
		if (this.keys.left.isDown || this.keysWASD.A.isDown) {
			this.sprite.anims.play('left', true);
			this.coords.r_x -= 3;
		} else if (this.keys.right.isDown || this.keysWASD.D.isDown) {
			this.sprite.anims.play('right', true);
			this.coords.r_x += 3;
		} else if (this.keys.up.isDown || this.keysWASD.W.isDown) {
			this.sprite.anims.play('down', true);
			this.coords.r_y -= 3;
		} else if (this.keys.down.isDown || this.keysWASD.S.isDown) {
			this.sprite.anims.play('up', true);
			this.coords.r_y += 3;
		} else {
			this.sprite.anims.play('stop');
		}
	}

	getPosition() {
		return this.coords;
	}

	toTop() {
		this.sprite.setDepth(1);
	}

	getScreenPosition() {
		return { "x" : this.sprite.x, "y" : this.sprite.y}
	}

}
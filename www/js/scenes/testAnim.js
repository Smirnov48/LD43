class TestAnim extends Phaser.Scene {
	constructor() {
		super( { key: 'TestAnim'});
	}
	preload () {
		this.load.image('map', 'assets/map.png');
		this.load.spritesheet('player', 'assets/krolikk.png', { frameWidth: 60, frameHeight: 60 });
		this.load.image('tree', 'assets/tree.png');
		this.load.image('water', 'assets/water.png');
		this.load.image('grass', 'assets/grass.png');
		this.load.image('enemy11', 'assets/enemy.png');
		this.load.image('beach', 'assets/beach.png');
		this.load.image('deepWater', 'assets/deepWater.png');
        this.load.image('poison1', 'assets/poison1.png');
        this.load.image('road', 'assets/road.png');
		this.load.image('grassStep', 'assets/grassStep.png');
        this.load.image('mount', 'assets/Mount.png');
        this.load.image('mountRoad', 'assets/MountRoad.png');




		this.load.spritesheet('playerRun', 'assets/run.png', { frameWidth: 55, frameHeight: 55 });

		this.keys = this.input.keyboard.addKeys('Y'); 
	}

	create () {
		this.cameras.main.setBackgroundColor('rgba(0, 255, 0, 0.5)');
		new Tree(this, 300, 300);
		new Enemy1(this, 400, 500);

        for (var i = 0; i < 50; i++) {
                  var poison11 = this.physics.add.image(Phaser.Math.FloatBetween(100,1500), 100 + i * 30, 'poison');
                     this.physics.add.collider(player, poison11, hitPoison, null, this);
                            }

		this.sprite = this.physics.add.sprite(450, 240, 'playerRun');

		this.anims.create({
			key: 'playerRun',
			frames: this.anims.generateFrameNumbers('playerRun', { start:0, end:1 }),
			frameRate: 10,
			repeat: -1
		});
		this.sprite.anims.play('playerRun', true);

function hitPoison(player, poison11) {
                    poison11.disableBody(true, true);
                }



		
	}

	update(time, delta){
		if (this.keys.Y.isDown) {
			this.scene.start('Game');
		}
	}

}
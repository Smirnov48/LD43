class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}

	preload () {
		this.load.image('fon', 'assets/fonTest.png');
		this.load.image('wall1', 'assets/wall111.png');
		this.load.image('wall2', 'assets/wall112.png');
		this.load.image('npc1', 'assets/зшвщк.png');
		this.load.spritesheet('player', 'assets/krolikk.png', { frameWidth: 60, frameHeight: 60 });
	}

	create () {

  var wall11 = this.physics.add.staticGroup();

                  wall11.create(300, 250, 'wall1');
                wall11.create(600, 250, 'wall1');
var wall12 = this.physics.add.staticGroup();

                wall12.create(400, 250, 'wall2');
                wall12.create(400, 650, 'wall2');

		this.add.image(200, 300, 'fon');
		var npc11 = this.physics.add.sprite(400, 300, 'npc1');
        npc11.setBounce(0.2);
	    npc11.setCollideWorldBounds(true);
        npc11.setVelocityX(50);
        npc11.setVelocityY(50);

 this.physics.add.collider(npc11, wall11);
this.physics.add.collider(npc11, wall12);

		this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');
		this.player = new Player(this);

	}

	update(time, delta){
		this.player.update();
}

}
function hitWalls(npc11, wall11) {
	if (npc11.body.touching.down) {
        npc11.setVelocityX(-20);
		npc11.setVelocityY(-20);
	}
	if (enemy.body.touching.left) {
		npc11.setVelocityX(-20);
		npc11.setVelocityY(20);
	}

if (npc11.body.touching.right) {
		npc11.setVelocityX(20);
		npc11.setVelocityY(-20);
	}
	if (npc11.body.touching.up) {
	    npc11.setVelocityX(20);
		npc11.setVelocityY(20);
	}


}

function hitWalls2(npc11, wall2) {
	if (npc11.body.touching.down) {
        npc11.setVelocityX(-20);
		npc11.setVelocityY(-20);
	}
	if (enemy.body.touching.left) {
		npc11.setVelocityX(-20);
		npc11.setVelocityY(20);
	}

if (npc11.body.touching.right) {
		npc11.setVelocityX(20);
		npc11.setVelocityY(-20);
	}
	if (npc11.body.touching.up) {
	    npc11.setVelocityX(20);
		npc11.setVelocityY(20);
	}


}

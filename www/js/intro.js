class Intro extends Phaser.Scene {

	constructor() {
		super( { key: 'Intro'});
	}

	preload() {
		this.load.image("ldlogo", "assets/ldlogo.png");
		this.load.audio('logohit', ['assets/logohit.wav']);
	}

	create () {
		var hitsound = this.sound.add('logohit');

		this.matter.world.setBounds(0, -300, 960, 840);
		var ldlogo = this.matter.add.image(50, -100, 'ldlogo');
		ldlogo.setVelocityX(30);
		ldlogo.setVelocityY(20);
		ldlogo.setBounce(0.1);
		ldlogo.setAngularVelocity(3);

  		 this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
			hitsound.play();
		});
	}

	update(time, delta){
	}
}
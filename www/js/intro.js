class Intro extends Phaser.Scene {

	constructor() {
		super( { key: 'Intro'});
	}

	preload() {
		this.load.image("ldlogo", "assets/ldlogo.png");
	}

	create () {
		this.matter.world.setBounds(0, -300, 960, 840);
		var ldlogo = this.matter.add.image(50, -100, 'ldlogo');
		ldlogo.setVelocityX(10);
		ldlogo.setVelocityY(20);
		ldlogo.setBounce(0.1);
		ldlogo.setAngularVelocity(Math.random());
	}

	update(time, delta){
	}

}
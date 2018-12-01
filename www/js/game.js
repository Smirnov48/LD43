class Game extends Phaser.Scene {

	constructor() {
		super( { key: 'Game'});
	}
preload () {
         this.load.image('fon', 'assets/fonTest.png');
		this.load.image('npc1', 'assets/зшвщк.png');
        
}
	create () {
		this.add.image(200, 300, 'fon');
		 npc11 = this.add.sprite(400, 300, 'npc1');
         npc11.setBounce(0.2);
	     nps11.setCollideWorldBounds(true);
         nps11.setVelocityX(Math.random(20));
         nps11.setVelocityY(Math.random(20));

		this.load.image('player', 'assets/krolik.png');
	}

		this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');
		this.player = new Player(this);
	update(time, delta){
		this.player.update();
	}

}
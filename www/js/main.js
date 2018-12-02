new Phaser.Game({
	parent	:"game-display",
	width	:960, //640
	height	:540, //360
	type	:Phaser.AUTO,
	physics: {
		default: 'arcade',
		arcade: {
			gravity:0,
			debug: false
		}
	},
	backgroundColor:0xD090D0,
	scene: [Game, TestAnim]
});
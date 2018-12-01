new Phaser.Game({
	parent	:"game-display",
	width	:960, //640
	height	:540, //360
	type	:Phaser.AUTO,
	physics: {
		default: 'matter',
		matter: {
			debug: false
		}
	},
	backgroundColor:0xD090D0,
	scene: [Intro, Menu, Game, Game1, Game2]
});
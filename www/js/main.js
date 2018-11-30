new Phaser.Game({
	parent	:"game-display",
	width	:960, //640
	height	:540, //360
	type	:Phaser.AUTO,
	physics: {
		default: 'matter',
		arcade : {
			gravity: {
				y: 300
			},
			debug: true
		},
		matter: {
			debug: true
		}
	},
	backgroundColor:0xD090D0,
	scene: [Intro, Menu, Game]
});
new Phaser.Game({
	parent	:"game-display",
	width	:960, //640
	height	:540, //360
	type	:Phaser.AUTO,
	physics: {
		default:"matter",
		/*
		arcade : {
			gravity: {
				y: 0
			},
			debug: false
		},
		*/
		matter: {
			debug: false
		}
	},
	backgroundColor:0xD090D0,
	scene: [Game, Intro, Menu]
});
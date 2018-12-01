class Map {

	constructor(game) {
		for (var i = 0; i < 150; i++) { 
			for (var j = 0; j < 150; j++) { 
				var color = game.textures.getPixel(i, j, 'map');
				switch (color._color) {
					case 0x267F00:  //tree
						new Tree(game, i * 40 - 200, j * 40-200);
						break;
					case 0x4CFF00: //grass
						break;
					case 0x0094FF://water
						break;
					case 0xFF00FF://start position
						break;
				}
			}
		}
		//game.make.bitmapData(1000, 1000);
	}

}
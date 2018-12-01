class Map {

	constructor(game) {
		for (var i = 0; i < 150; i++) { 
			for (var j = 0; j < 150; j++) { 
				var color = game.textures.getPixel(i, j, 'map');
				switch (color._color) {
					case 0x267F00:  //tree
						new Tree(game, i * 67, j * 67);
						break;
					case 0x4CFF00: //grass
						new Grass(game, i * 67, j * 67);
						break;
					case 0x0094FF://water
						new Water(game, i * 67, j * 67);
						break;
					case 0xFF00FF://start position
						break;
				}
			}
		}
	}

}
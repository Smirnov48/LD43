class Map {

	constructor(game) {
		Map.ID_TREE = 0x267F00;
		Map.ID_GRASS = 0x4CFF00;
		Map.ID_WATER = 0x0094FF;
		Map.ID_START_POSITION = 0xFF00FF;

		this.map = new Array();
		for (var i = 0; i < 150; i++) { 
			this.map[i] = new Array();

			for (var j = 0; j < 150; j++) { 
				this.map[i][j] = game.textures.getPixel(i, j, 'map')._color;
			}
		}
	}

}
class Game {
	constructor(currentStage) {
		this.stage = currentStage
	}

	setStage(newStage) {
		this.stage = newStage
		this.renderGame
	}

	renderGame() {
		document.getElementById('js-body')
		.innerHTML = '<button class="button -success" id=js-start>Начать игру</button>';
	}
}
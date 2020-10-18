const player = {
	name: '',
	class: '',
	xp: 0,
	level: 0,
	baseParams: {
		hp: null,
		mp: null
	},
	attack: {
		minDmg: null,
		maxDmg: null,
		action: null
	}
};

console.log(playerBaseConfig);

const game = new Game('NOT STARED')
game.renderGame();

// Исполнение логики
//document.getElementById('js-start').onclick = createPlayer;
// Конец исполненяемой логики


// Функции, которые используются в процессе выпонения программы
function createPlayer() {
	setPlayerName();
	setPlayerClass();
	console.log('Вот игрок: ', player);
}

function setPlayerName() {
	const playerName = prompt('Укажите имя персонажа');
	if (!playerName) {
		alert('Так нельзя — тебя должны как-то звать — такие уж тут правила!');
		setPlayerName();
	} else {
		player.name = playerName;
	}
}

function setPlayerClass() {
	let chosenClass = prompt('Выберите класс персонажа: "warrior" / "scout" / "wizard"');

	if (!chosenClass) {
		alert('Прости — надо что-то выбрать!');
		setPlayerClass();
	} else {
		chosenClass = chosenClass.toLowerCase();
	}

	if (chosenClass === 'warrior' || chosenClass === 'scout' || chosenClass === 'wizard') {
		setBasePlayerConfig(chosenClass);
	} else {
		alert('Ну ты что, картоновый? Вводи правильно!');
		setPlayerClass();
	}
}

function setBasePlayerConfig(chosenClass) {
	player.class = chosenClass;
	player.baseParams = playerBaseConfig.baseParams[chosenClass];
}






function computerPlay() {
	const rps=["Rock", "Paper", "Scissors"]
	selection=Math.floor(Math.random()*3)
	return rps[selection]
}
function playRound(playerSelection, computerSelection) {
	const ps = playerSelection.toLowerCase();
	const cs = computerSelection.toLowerCase();
	if (ps==='rock' && cs ==='scissors') {
		return 'You win! Rock beats Scissors!'
	}
	else if (ps === 'scissors' && cs === 'paper') {
		return 'You win! Scissors beats Paper!'	
	}
	else if (ps === 'paper' && cs === 'rock') {
		return 'You win! Paper beats Rock!'	
	}
	else if (ps === 'rock' && cs === 'paper') {
		return 'You lose! Paper beats Rock!'
	}
	else if (cs==='rock' && ps ==='scissors') {
		return 'You lose! Rock beats Scissors!'
	}
	else if (cs === 'scissors' && ps === 'paper') {
		return 'You win! Scissors beats Paper!'	
	}
	else return 'Draw! '+ ps+ " doesn't beat " + cs
}
function game() {
	let playerScore=0
	let computerScore=0
	
	for (let i = 0; i < 5; i++) {
		let playerSelection = window.prompt('Enter: Rock, Paper or Scissors');
		let result = playRound(playerSelection,computerPlay());
		console.log(result)

		if (result.startsWith('You win!')) {
			playerScore++;
			console.log('p '+playerScore)
		}
		else if (result.startsWith('You lose!')) {
			computerScore++
			console.log('c '+computerScore)
		}
	}

	if (playerScore > computerScore) {
		return 'You win the game!'
	}
	else if (computerScore > playerScore) {
		return 'You lose! try again!'
	}
}
console.log(game())

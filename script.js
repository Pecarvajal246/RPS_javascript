function computerPlay() {
	const rps=["Rock", "Paper", "Scissors"]
	selection=Math.floor(Math.random()*3)
	return rps[selection]
}
// function playRound(e) {
function playRound(e) {
	playerSelection =e.target.classList.value;
	const ps = playerSelection.toLowerCase();
	const cs = computerPlay().toLowerCase();
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
function game(e) {
	if (finishedGame === false){
		let result = playRound(e);
		div.textContent = result

		if (result.startsWith('You win!')) {
			playerScore++;
			console.log('p '+playerScore)
			div2.textContent = "Player Score "+playerScore + " Computer Score "+ computerScore
		}
		else if (result.startsWith('You lose!')) {
			computerScore++
			console.log('c '+computerScore)
			div2.textContent = "Player Score "+playerScore + " Computer Score "+ computerScore
		}
		if (playerScore === 5) {
			div.textContent = 'You win the game!'
			finishedGame = true
			const button = document.createElement('button')
			body.appendChild(button)
			button.textContent = 'Play again'
			button.addEventListener('click', function (e){
				playerScore=0
				computerScore=0
				finishedGame=false
				div.textContent = ''
				div2.textContent = "Player Score 0 Computer Score 0"
				body.removeChild(button)
			})
		}
		else if (computerScore === 5) {
			div.textContent ='You lose! try again!'
			finishedGame = true
			const button = document.createElement('button')
			body.appendChild(button)
			button.textContent = 'Play again'
			button.addEventListener('click', function (e){
				playerScore=0
				computerScore=0
				finishedGame=false
				div.textContent = ''
				div2.textContent = "Player Score 0 Computer Score 0"
				body.removeChild(button)
			})
		}
	}

}
let playerScore=0
let computerScore=0
let finishedGame = false
const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)
const div2 = document.createElement('div2')
body.appendChild(div2)
const buttons = document.querySelectorAll('button')
buttons.forEach(button =>button.addEventListener('click', game));

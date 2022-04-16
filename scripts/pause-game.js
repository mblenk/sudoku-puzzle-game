import { timeFormat } from "../functions/timeFormat.js"
import { timerInterval, elapsedTime, setElapsedTime } from "./start-game.js"

const pauseGameButton = document.getElementById('pause')
const continueButton = document.getElementById('continue')
const puzzleBoard = document.getElementById('puzzle')

let newTimerInterval = null
let timeReset = 0

// Pause Game
pauseGameButton.addEventListener('click', () => {
    clearInterval(timerInterval)
    clearInterval(newTimerInterval)
    
    pauseGameButton.classList.add('hide')
    continueButton.classList.remove('hide')

    puzzleBoard.classList.add('hide-puzzle')
})

// Continue Game
continueButton.addEventListener('click', () => {
    puzzleBoard.classList.remove('hide-puzzle')
    pauseGameButton.classList.remove('hide')
    continueButton.classList.add('hide')

    let pausedTime = elapsedTime
    const startTime = Date.now() - pausedTime - timeReset; 
    setElapsedTime(0)

    newTimerInterval = setInterval(() => {   
        timeReset = Date.now() - startTime
        document.getElementById('timer-span').innerText = timeFormat(timeReset)
    }, 1000)
})

export { newTimerInterval }
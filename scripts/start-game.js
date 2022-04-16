import { loadGame } from "../functions/loadGame.js"
import { timeFormat } from "../functions/timeFormat.js"

const startGame = document.getElementById('start-game')
let timerInterval = null
let elapsedTime = 0

const setElapsedTime = (value) => {
    elapsedTime = value
}

startGame.addEventListener('click', () => { 
    loadGame()

    // Start Timer
    const startTime = Date.now()
    timerInterval = setInterval(() => {   
        elapsedTime = Date.now() - startTime
        document.getElementById('timer-span').innerText = timeFormat(elapsedTime)
    }, 1000)
    startGame.setAttribute('disabled','')

})

export { elapsedTime, timerInterval, setElapsedTime }

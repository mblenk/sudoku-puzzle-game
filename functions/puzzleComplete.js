import { sudokuRows, sudokuColumns, sudokuBoxes } from "../scripts/game-data.js"
import { newTimerInterval } from "../scripts/pause-game.js"
import { checkArray } from "./checkArray.js"
import { timerInterval } from "../scripts/start-game.js"


const puzzleComplete = () => {
    const expectedValues = ['1','2','3','4','5','6','7','8','9']
    const errorLocations = []

    // Check all rows, columns and boxes for duplicated values
    const rows = Object.keys(sudokuRows)
    rows.forEach(row => {
        sudokuRows[row].sort((a,b) => a - b)
        const checkResult = checkArray(sudokuRows[row], expectedValues)
        if(!checkResult){errorLocations.push(row)}
    })
    const columns = Object.keys(sudokuColumns)
    columns.forEach(column => {
        sudokuColumns[column].sort((a,b) => a - b)
        const checkResult = checkArray(sudokuColumns[column], expectedValues)
        if(!checkResult){errorLocations.push(column)}
    })
    const boxes = Object.keys(sudokuBoxes)
    boxes.forEach(box => {
        sudokuBoxes[box].sort((a,b) => a - b)
        const checkResult = checkArray(sudokuBoxes[box], expectedValues)
        if(!checkResult){errorLocations.push(box)}
    })

    // Produce success or failure modal dependent on outcome of the check
    const modalText = document.getElementById('modal-text')
    const modalTime = document.getElementById('modal-time')
    
    if(errorLocations.length === 0) {
        clearInterval(timerInterval)
        clearInterval(newTimerInterval)
        
        const timeTaken = document.getElementById('timer-span').innerText
        modalText.innerText = 'Congratulations! Your time to complete the puzzle was:'
        modalTime.innerText = timeTaken
    }
    if(errorLocations.length > 0) {
        modalText.innerText = 'There is an error in your solution, please check again'
    }

    const modal = document.querySelector('.modal')
    modal.style.display = "block"

    const closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click', (e) => {
        modal.style.display = "none"
    })

    window.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.style.display = "none"
        }
    })

    // Re-enable start button so user can start a new game
    const startGame = document.getElementById('start-game')
    startGame.removeAttribute('disabled','')
}

export { puzzleComplete }
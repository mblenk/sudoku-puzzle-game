import { assignCellToRowColumnAndBox } from "./assignCellToRowColumnAndBox.js"
import { easy, medium, hard, expert } from "../scripts/game-data.js"
import { sudokuRows, sudokuColumns, sudokuBoxes } from "../scripts/game-data.js"
import { createBoard } from "./createBoard.js"


let completedCells = []

const loadGame = () => {
    const gameBoardSelect = document.getElementById('game-boards')
    const difficultyLevel = gameBoardSelect.value

    const inputs = document.getElementsByClassName('input')
    const inputArray = Array.from(inputs)
    
    // Create game board based on difficulty
    if(difficultyLevel === 'easy') {
        createBoard(inputArray, easy)
    }
    if(difficultyLevel === 'medium') {
        createBoard(inputArray, medium)
    }
    if(difficultyLevel === 'hard') {
        createBoard(inputArray, hard)
    }
    if(difficultyLevel === 'expert') {
        createBoard(inputArray, expert)
    }

    // Add classes to and disable provided cells
    inputArray.forEach(input => {
        if(input.value > 0) {
            input.classList.add('provided')
            input.setAttribute('disabled', '')
        }
        if(!input.value) {
            input.classList.remove('provided')
            input.removeAttribute('disabled', '')
        }

        assignCellToRowColumnAndBox(input, sudokuRows, sudokuColumns, sudokuBoxes)
        
        // Add all provided cells to array to track when game is complete
        if(input.value) {completedCells.push(input.id)}
    })
}

export { loadGame, completedCells }
import { loadGame, completedCells } from "../functions/loadGame.js"
import { sudokuRows, sudokuColumns, sudokuBoxes } from "./game-data.js"

const clearButton = document.getElementById('clr-btn')

clearButton.addEventListener('click', () => {
    // Reset completed cells
    completedCells.length = 0

    // Clear user-input values to avoid duplicating through loadGame()
    const rows = Object.keys(sudokuRows)
    rows.forEach(key => {
        sudokuRows[key].length = 0
    })

    const columns = Object.keys(sudokuColumns)
    columns.forEach(key => {
        sudokuColumns[key].length = 0
    })

    const boxes = Object.keys(sudokuBoxes)
    boxes.forEach(key => {
        sudokuBoxes[key].length = 0
    })

    loadGame()
})
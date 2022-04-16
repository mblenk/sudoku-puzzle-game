import { sudokuRows, sudokuColumns, sudokuBoxes } from "../scripts/game-data.js"
// import { undoButtonClicked } from "./undoButton.js"
// import { userInputChange } from "./userInputChange.js"
import { completedCells } from "./loadGame.js"

const undo = (input, callback, value) => {
    const inputClassList = Array.from(input.classList)
    const [style, row, column, box] = inputClassList

    const rows = Object.keys(sudokuRows)
    rows.forEach(key => {
        if(row === key) {
            callback(sudokuRows[key], value)
        }
    })

    const columns = Object.keys(sudokuColumns)
    columns.forEach(key => {
        if(column === key) {
            callback(sudokuColumns[key], value)
        }
    })

    const boxes = Object.keys(sudokuBoxes)
    boxes.forEach(key => {
        if(box === key) {
            callback(sudokuBoxes[key], value)
        }
    })
    completedCells.pop()
}

export { undo }
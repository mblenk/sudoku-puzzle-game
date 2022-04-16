import { sudokuRows, sudokuColumns, sudokuBoxes } from "../scripts/game-data.js"

const assignCellToRowColumnAndBox = (input) => {
    const inputClassList = Array.from(input.classList)
    const [style, row, column, box] = inputClassList

    const rows = Object.keys(sudokuRows)
    rows.forEach(key => {
        if(row === key) {
            sudokuRows[key].push(input.value)
            sudokuRows[key] = sudokuRows[key].filter(e => String(e).trim())
        }
    })

    const columns = Object.keys(sudokuColumns)
    columns.forEach(key => {
        if(column === key) {
            sudokuColumns[key].push(input.value)
            sudokuColumns[key] = sudokuColumns[key].filter(e => String(e).trim())
        }
    })

    const boxes = Object.keys(sudokuBoxes)
    boxes.forEach(key => {
        if(box === key) {
            sudokuBoxes[key].push(input.value)
            sudokuBoxes[key] = sudokuBoxes[key].filter(e => String(e).trim())
        }
    })
}

export { assignCellToRowColumnAndBox }
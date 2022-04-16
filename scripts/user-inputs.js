
import { completedCells } from "../functions/loadGame.js"
import { assignCellToRowColumnAndBox } from "../functions/assignCellToRowColumnAndBox.js"
import { puzzleComplete } from "../functions/puzzleComplete.js"
import { moves } from "./game-data.js"
import { undo } from "../functions/undo.js"
import { userInputChange } from "../functions/userInputChange.js"

const inputs = document.getElementsByClassName('input')
const inputArray = Array.from(inputs)

inputArray.forEach(input => {
    input.addEventListener('change', () => {
        const inputId = input.id
        const inputValue = input.value
        
        // If cell has had previous input, remove this from the solution
        const previousMove = moves.find(move => move[inputId])
        if(previousMove) {
            undo(input, userInputChange, previousMove[inputId])   
        }
       
        // Assign new value
        assignCellToRowColumnAndBox(input)

        // Register the move
        moves.unshift({ [inputId]: inputValue })

        // Increase the count of completed cells
        completedCells.push(input.id)

        // Trigger the solution checker once all cells are complete
        if(completedCells.length === 81) {
            puzzleComplete()
        }
    })
})



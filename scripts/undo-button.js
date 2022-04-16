import { moves } from "./game-data.js"
import { undo } from "../functions/undo.js"
import { undoButtonClicked } from "../functions/undoButton.js"


const undoButton = document.getElementById('undo')

undoButton.addEventListener('click', () => {
    const lastMove = moves[0]
    const inputKey = Object.keys(lastMove)
    const lastInput = document.getElementById(inputKey[0])
    lastInput.value = ''

    moves.shift()
    undo(lastInput, undoButtonClicked)
})

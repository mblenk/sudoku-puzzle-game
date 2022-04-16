//Define columns
const columnOne = [1,10,19,28,37,46,55,64,73]
const columnTwo = columnOne.map(value => (value + 1))
const columnThree = columnOne.map(value => (value + 2))
const columnFour = columnOne.map(value => (value + 3))
const columnFive = columnOne.map(value => (value + 4))
const columnSix = columnOne.map(value => (value + 5))
const columnSeven = columnOne.map(value => (value + 6))
const columnEight = columnOne.map(value => (value + 7))
const columnNine = columnOne.map(value => (value + 8))

//Define boxes
const boxOne = [1,2,3,10,11,12,19,20,21]
const boxTwo = boxOne.map(value => (value + 3))
const boxThree = boxTwo.map(value => (value + 3))
const boxFour = boxThree.map(value => (value + 21))
const boxFive = boxFour.map(value => (value + 3))
const boxSix = boxFive.map(value => (value + 3))
const boxSeven = boxSix.map(value => (value + 21))
const boxEight = boxSeven.map(value => (value + 3))
const boxNine = boxEight.map(value => (value + 3))


//Create the Grid
const puzzleGrid = document.getElementById('puzzle')
for(let i = 1; i < 82; i++) {

    puzzleGrid.innerHTML += `
            <div class="grid-item" id="cell${i}"> 
                <input type="text" class="input" id="${i}">
            </div>
    `
    const cell = document.getElementById(`cell${i}`)

    //Border Formatting
    if(i % 3 === 0) {
        cell.classList.add('border-right')
    } 
    if(i > 18 && i < 28 || i > 45 && i < 55) {
        cell.classList.add('border-bottom')
    } 
    if(i % 9 === 0) {
        cell.classList.remove('border-right')
    }

    const input = document.getElementById(`${i}`)
    //Row Classes
    if(i > 0 && i < 10) {
        input.classList.add('rowOne')
    }
    if(i > 9 && i < 19) {
        input.classList.add('rowTwo')
    }
    if(i > 18 && i < 28) {
        input.classList.add('rowThree')
    }
    if(i > 27 && i < 37) {
        input.classList.add('rowFour')
    }
    if(i > 36 && i < 46) {
        input.classList.add('rowFive')
    }
    if(i > 45 && i < 55) {
        input.classList.add('rowSix')
    }
    if(i > 54 && i < 64) {
        input.classList.add('rowSeven')
    }
    if(i > 63 && i < 73) {
        input.classList.add('rowEight')
    } 
    if(i > 72 && i < 82) {
        input.classList.add('rowNine')
    }
    //Column Classes
    if(columnOne.includes(i)) {
        input.classList.add('columnOne')
    }
    if(columnTwo.includes(i)) {
        input.classList.add('columnTwo')
    }
    if(columnThree.includes(i)) {
        input.classList.add('columnThree')
    }
    if(columnFour.includes(i)) {
        input.classList.add('columnFour')
    }
    if(columnFive.includes(i)) {
        input.classList.add('columnFive')
    }
    if(columnSix.includes(i)) {
        input.classList.add('columnSix')
    }
    if(columnSeven.includes(i)) {
        input.classList.add('columnSeven')
    }
    if(columnEight.includes(i)) {
        input.classList.add('columnEight')
    }
    if(columnNine.includes(i)) {
        input.classList.add('columnNine')
    }
    //Box Classes
    if(boxOne.includes(i)) {
        input.classList.add('boxOne')
    }
    if(boxTwo.includes(i)) {
        input.classList.add('boxTwo')
    }
    if(boxThree.includes(i)) {
        input.classList.add('boxThree')
    }
    if(boxFour.includes(i)) {
        input.classList.add('boxFour')
    }
    if(boxFive.includes(i)) {
        input.classList.add('boxFive')
    }
    if(boxSix.includes(i)) {
        input.classList.add('boxSix')
    }
    if(boxSeven.includes(i)) {
        input.classList.add('boxSeven')
    }
    if(boxEight.includes(i)) {
        input.classList.add('boxEight')
    }
    if(boxNine.includes(i)) {
        input.classList.add('boxNine')
    }
}















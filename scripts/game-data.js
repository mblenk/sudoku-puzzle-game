// Game set-up
const easy = [3,7,'',9,'',6,4,'','',4,2,'',1,5,8,'','','',5,'','',3,'',7,'',8,'',6,'',3,8,'','','',9,'','','','','',9,4,8,'','','',8,'','',1,'',6,'',7,'',3,2,4,6,9,1,'','',7,4,'','','','',3,6,'','',9,6,'','',5,'','','']

// const easy = [3,7,8,9,2,6,4,5,1,4,2,9,1,5,8,7,3,6,5,6,1,3,4,7,9,8,2,6,1,3,8,7,2,5,9,4,2,5,7,6,9,4,8,1,3,9,8,4,5,1,3,6,2,7,8,3,2,4,6,9,1,7,5,7,4,5,2,8,1,3,6,9,1,9,6,7,3,5,2,'','']

const medium = [1,'',6,'','',9,5,'','',9,4,'',7,6,'','','',2,'','',8,'','','','','',9,'','','','',7,5,'','',6,8,'',7,3,'',6,'','','','',6,3,'','','',1,'',7,2,5,9,6,3,1,'','','','','','',9,'','','','','','','','',5,'','',9,2,'']

const hard = [6,'',2,'','','','','','',3,'','','','',2,'',5,'','',4,'',3,'','','',7,'','',8,'',4,'','','',9,'','','','','','','','','','','',3,'','',1,'','','',5,'','','',2,'','','','',6,'',6,8,'','',4,'','',1,'',5,'',9,'','','','',8]

const expert = ['',4,'','','','','',1,'',8,'','','','',9,'','','',6,'',2,'',3,'','','',4,'','','',9,'','','','','',7,'',3,'','',5,'','','','','','','','',4,5,6,1,'',5,7,'','','',8,3,'','','','',2,'','',7,'','','',8,'','','','','','','','']

// Row, Column and Box assignment
const rows = [[],[],[],[],[],[],[],[],[]]
const columns = [[],[],[],[],[],[],[],[],[]]
const boxes = [[],[],[],[],[],[],[],[],[]]

const [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine] = rows
const sudokuRows = {
    'rowOne': rowOne,
    'rowTwo': rowTwo,
    'rowThree': rowThree,
    'rowFour': rowFour,
    'rowFive': rowFive,
    'rowSix': rowSix,
    'rowSeven': rowSeven,
    'rowEight': rowEight,
    'rowNine': rowNine
}

const [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven, columnEight, columnNine] = columns
const sudokuColumns = {
    'columnOne': columnOne,
    'columnTwo': columnTwo,
    'columnThree': columnThree,
    'columnFour': columnFour,
    'columnFive': columnFive,
    'columnSix': columnSix,
    'columnSeven': columnSeven,
    'columnEight': columnEight,
    'columnNine': columnNine
}

const [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine] = boxes
const sudokuBoxes = {
    'boxOne': boxOne,
    'boxTwo': boxTwo,
    'boxThree': boxThree,
    'boxFour': boxFour,
    'boxFive': boxFive,
    'boxSix': boxSix,
    'boxSeven': boxSeven,
    'boxEight': boxEight,
    'boxNine': boxNine
}

const moves = []

export { easy, medium, hard, expert, rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine, columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven, columnEight, columnNine, boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine, sudokuRows, sudokuColumns, sudokuBoxes, moves }


const createBoard = (array, game) => {
    array.forEach(input => {
        const arrayIndex = input.id - 1
        input.value = game[arrayIndex]
    })
}

export { createBoard }
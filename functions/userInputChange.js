
const userInputChange = (array, value) => {
    const arrayIndex = array.indexOf(value)
    array.splice(arrayIndex, 1)
}

export { userInputChange }
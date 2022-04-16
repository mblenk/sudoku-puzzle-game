const checkArray = (array1, array2) => {
    return array1.every((value, index) => value === array2[index])
}

export { checkArray }
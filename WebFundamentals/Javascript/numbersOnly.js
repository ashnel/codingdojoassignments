function numbersOnly(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
function fancyArr(array, symbol, reversed) {
    if (reversed === true) {
        for (var i = 0; i < array.length / 2; i++) {
            var temp = array[i];
            array[i] = array[array.length - i - 1];
            array[array.length - i - 1] = temp;
        }
    }

    for (var idx = 0; idx < array.length; idx++) {
        console.log(idx + symbol + array[idx]);
    }
}

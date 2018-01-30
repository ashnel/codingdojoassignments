function printRange(startPoint, endPoint, skip) {
    var jump = skip;
    var start = startPoint;

    if (skip == undefined) {
        jump = 1;
    }

    if (endPoint == undefined) {
        start = 0;
        endPoint = startPoint;
    }

    for (var i = start; i < endPoint; i += jump) {
        console.log(i);
    }
}
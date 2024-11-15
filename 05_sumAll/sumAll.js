const sumAll = function(numFirst, numEnd) {
    let sum = 0;
    let tmp;

    if (!Number.isInteger(numFirst) || !Number.isInteger(numEnd) || numFirst < 0 || numEnd < 0) {
        return "ERROR";
    }

    if (numFirst > numEnd) {
        tmp = numFirst;
        numFirst = numEnd;
        numEnd = tmp;
    }
    
    while (numEnd >= numFirst) {
        sum += numFirst;
        numFirst++;
    }
    
    return sum;
};
// Do not edit below this line
module.exports = sumAll;

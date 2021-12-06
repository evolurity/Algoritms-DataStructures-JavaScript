function one(callback) {
    return callback ? callback(1) : 1
}

function three(callback) {
    return callback ? callback(3) : 3
}

function plus(number1) {
    return function (number2) {
        return number1 + number2
    }
}

function minus(number1) {
    return function (number2) {
        return number2 - number1
    }
}

console.log(one(plus(three(plus(one(plus(three(minus((one()))))))))));

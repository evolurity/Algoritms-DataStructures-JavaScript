function palindrom(str) {
    const reverseStr = str.toLowerCase().split('').reverse().join('')
    return str === reverseStr
}

console.log(palindrom('123211'));
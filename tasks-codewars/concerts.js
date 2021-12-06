const concerts = {
    'Moscow': new Date('2020-04-10'),
    'Moscow1': new Date('2022-07-10'),
    'Moscow2': new Date('2020-04-19'),
    'Moscow3': new Date('2022-07-19'),
}
const concertsArr = []
for (let key in concerts) {
    concertsArr.push([key, concerts[key]])
}
concertsArr.sort((a, b) => a[1] - b[1])
const result = concertsArr.filter((concert) => (concert[1].getTime() > Date.now()))
console.log(result);

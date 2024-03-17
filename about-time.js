import ms from 'ms'

const time = ms('2 days')
const timeLong = ms(60000, { long: true })

console.log(time);
console.log(timeLong);
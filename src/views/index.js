const { readFileSync } = require('fs')
const { green } = require('./colors.js')

const printBanner = () => {
  const banner = readFileSync('src/views/message.txt').toString()
  console.log(green(banner))
}

module.exports = printBanner
const { prompt } = require('inquirer')
const { morseEncode, base64Encode, ceasaerCipher } = require('./encryptions.js')
const { red } = require('../views/colors.js')
const printBanner = require('../views/index.js')

module.exports = function Main() {
    printBanner()
    prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text to be encrypted: '
        },
        {
            type: 'list',
            name: 'encryptions',
            message: 'Select the type of encryption you want: ',
            choices: [
                'Base 64',
                'Morse',
                'Ceasaer Cipher'
            ]
        },
        {
            type: 'input',
            name: 'key',
            default: 20,
            message: `Enter a key to use in the Cesar Cipher (if you haven't selected it just ignore it): `
        }
    ]).then(async ({ text, encryptions, key }) => {
        if (!text) console.log(red('[ERR] No message has been entered, try again.'))
        switch (encryptions) {
            case 'Base 64':
                base64Encode(text)
                break;

            case 'Morse':
                morseEncode(text)
                break;

            case 'Ceasaer Cipher':
                ceasaerCipher(text, key)
                break;
            default:
                console.log(red('[ERR] An error occurred while performing encryption, please run the command again.'))
                break;
        }
    })
}
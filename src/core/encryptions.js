const { green } = require('../views/colors.js')

function morseEncode(text) {
    const morse = {
        a: '.-',      b: '-...',    c: '-.-.',    d: '-..',
        e: '.',       f: '..-.',    g: '--.',     h: '....',
        i: '..',      j: '.---',    k: '-.-',     l: '.-..',
        m: '--',      n: '-.',      o: '---',     p: '.--.',
        q: '--.-',    r: '.-.',     s: '...',     t: '-',
        u: '..-',     v: '...-',    w: '.--',     x: '-..-',
        y: '-.--',    z: '--..',    1: '.----',   2: '..---',
        3: '...--',   4: '....-',   5: '.....',   6: '-....',
        7: '--...',   8: '---..',   9: '----.',   0: '-----',

        '.': '.-.-.-',    ',': '--..--',    '?': '..--..',
        "'": '.----.',    '/': '-..-.',     '(': '-.--.',
        ')': '-.--.-',    '&': '.-...',     ':': '---...',
        ';': '-.-.-.',    '=': '-...-',     '+': '.-.-.',
        '-': '-....-',    '_': '..--.-',    '"': '.-..-.',
        '$': '...-..-',   '!': '-.-.--',    '@': '.--.-.',
        ' ': '/',
    }

    var output = '';
    for (var i = 0, l = text.length; i < l; i++) {
      var letter = text[i].toLowerCase();
      if (morse[letter]) { output += morse[letter] + ' '; }
    }
    console.log(green(output))
}

function base64Encode(text) {
    console.log(green(Buffer.from(text).toString('base64')))
}

function ceasaerCipher(text, key) {
   console.log(green(text.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key) % 26 + 65))))
}

module.exports = { morseEncode, base64Encode, ceasaerCipher }
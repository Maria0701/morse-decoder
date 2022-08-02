const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function turnIntoCode(str) {    
    let twoDigits = '';
    if (str === '**********') twoDigits = ' ';
    str = str.replace(/^0+/, '');    
    for (let i = 0; i < str.length; i+=2) {
        const dig = str.slice(i, i + 2);
        if (dig === '10') twoDigits += '.';
        if (dig === '11') twoDigits += '-';
    }
    return twoDigits;
}

function decode(expr) {

    const newArr = [];
    for (let i = 0; i < expr.length; i+=10) {
        newArr.push(expr.slice(i, i + 10));
    }

    return newArr.map(item => turnIntoCode(item))
    .map(item => {
        if (item === ' ') {
            return ' ';
        } else {
            return MORSE_TABLE[item]
        }
    })
    .join('');
}

module.exports = {
    decode
}
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


function decode(expr) {
 //split coded string into separated letters  
 let arr = expr.split('');
 let sepArr = [];
 let i = 0;
 while (i <arr.length) {
     sepArr.push(arr.slice(i, i + 10));
     i += 10
 }
 
//delete padding 0 for each letter
 let noPaddingSepArr = [];
 let letterArr = [];
 let isStarted = false;
 sepArr.forEach((letter) => {
     for (let i = 0; i < letter.length; i++ ) {
         if (letter[i] == 1 || letter[i] == '*') {
             isStarted = true;
         }
         if(isStarted) {
             letterArr.push(letter[i])
         }
     }
     noPaddingSepArr.push(letterArr);
     letterArr = [];
     isStarted = false;
 })

//convert 1 and 0 to . and -
 let morseArr = [];
 let morseSyl = [];
 noPaddingSepArr.forEach((letter)=>{
     for(let i = 1; i< letter.length; i += 2) {
         if (letter[i] == '*') {
             morseSyl.push(' ');
             break;
         } else if (letter[i] == 0) {
         morseSyl.push('.')
         } else if (letter[i] == 1) {
             morseSyl.push('-')
         }
     }
     morseArr.push(morseSyl.join(''));
     morseSyl = [];
 })

// now decode!
let decodedArr = [];
for(let i = 0; i < morseArr.length; i++) {
 if (morseArr[i] == ' ') {
     decodedArr.push(' ')
 } else {
     decodedArr.push(MORSE_TABLE[morseArr[i]])
 }
}
const decodedStirng = decodedArr.join('');

    return decodedStirng
}

module.exports = {
    decode
}


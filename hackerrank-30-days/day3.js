'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);
    // apakah dia ganjil ATAU dia lebih dari lima dan kurang/sama dengan 20 maka dia weird ( sesuai rules nomor 1 dan 3 ) jika dia genap dan dia kurang dari 5 (2 dan 4 saja sih ini mah) return not weird ( sesuai rules nomor 2 dan 4 )
    N % 2 !== 0 || (N > 5 && N <= 20) ? console.log('Weird') : console.log('Not Weird')
}

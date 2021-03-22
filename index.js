const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const coinArr = [
    {
        cmd: '1',
        type: 'Орел'
    }, 
    {
        cmd: '2',
        type: 'Решка'
    }
];

console.log('Введите 1 (Орел), 2 (Решка) или quit (выход):');

rl.on('line', (cmd) => {
    const rand = Math.floor(Math.random() * coinArr.length);


    if (cmd === 'quit') {
        rl.close();
    } else {
        let result;
        
        if ((cmd === '1') || (cmd === '2') || (cmd === 'quit')) {
            console.log(`Вы выбрали: ${coinArr[cmd-1].type}, Противник выбрал: ${coinArr[rand].type}`);
            if (cmd === coinArr[rand].cmd) {
                console.log('Урааа! Вы выиграли!');
                result = "Win\n";
            } else {
                console.log('Упс. Вы проиграли.');
                result = "Loss\n";
            }

            fs.appendFile('log.txt', result, (err) => {
                if (err) {
                    throw err;
                }
            });
        } else {
            console.log('Вы ввели что то не то');
        }
        console.log('Введите 1 (Орел), 2 (Решка) или quit (выход):');
    }
});
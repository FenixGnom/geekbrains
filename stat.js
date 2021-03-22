const fs = require('fs');

fs.readFile('log.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Ещё не сыграно ни одной игры');
        return;
    }
    const arr = data.split('\n');

    const result = {
        'Победы': 0,
        'Проигрыши': 0,
        'Соотношение партий': ''
    }

    for(let line of arr)
    {
        if(line == 'Win')
        {
            result['Победы']++
        }
        if(line == 'Loss')
        {
            result['Проигрыши']++
        }
    }
    result['Соотношение партий'] = `${result['Победы']}:${result['Проигрыши']}`
    // var parties = arr.length - 1;

    // var win = 0, loss = 0, maxWin = 0, maxLoss = 0, i = 0, j = 0;

    // for (var key in arr) {
    //     if (arr[key] === 'Win') {
    //         win++;
    //         i++;
    //     } else {
    //         if (i >= maxWin) {
    //             maxWin = i;
    //             i = 0;
    //         }
    //         i = 0;
    //     }
    //     if (arr[key] === 'Loss') {
    //         loss++;
    //         j++;
    //     } else {
    //         if (j >= maxLoss) {
    //             maxLoss = j;
    //             j = 0;
    //         }
    //         j = 0;
    //     }
    // }
    console.table([result]);
    // console.log('Сыграно партий ' + parties);
    // console.log('Выигранных партий ' + win);
    // console.log('Проигранных партий ' + loss);
    // console.log('Соотношение партий: ' + win + ':' + loss);
    // console.log("Максимальне число побед подряд = " + maxWin);
    // console.log("Максимальне число проигрышей подряд = " + maxLoss);
});
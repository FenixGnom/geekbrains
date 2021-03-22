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

    console.table([result]);
});
const ansi = require('ansi')


process.stdin.setEncoding('utf8');
console.log('Enter text:');
process.stdin.on('readable', () => {
    const line = process.stdin.read();
    const cursor = ansi(process.stdout)
    cursor.beep().rgb(255,0,0).bold().bg.grey()
    if(!(line === null) && line !== '\n' && line !== '') 
    {
        cursor.write(line);
    }else{
        cursor.write('Empty string')
    }
    cursor.beep().reset().bg.reset().write('\n')
});
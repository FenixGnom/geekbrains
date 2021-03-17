const color = require('colors')
const qrcode = require('qrcode-terminal')

color.enable();
process.stdin.setEncoding('utf8');

console.log(color.green('Enter text or link to generate QR-Code:'));

process.stdin.on('readable', () => {
    const line = process.stdin.read();

    if(!(line === null) && line !== '\n' && line !== '') 
    {
        qrcode.generate(line.replace('\n',''));
    }else{
        console.log(color.red('Empty string'));
    }
    
});
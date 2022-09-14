const fs = require('fs');

console.log('init');

setTimeout(() => {
    console.log(performance.now(), 'timer0');
}, 100);

setImmediate(() => {
    console.log('Immediate');
});

fs.readFile(__filename, () => {
    console.log('file readed');
});

setTimeout(() => {
    for (let i = 0; i < 100000000; i++) {

    }
    console.log('done');
    Promise.resolve().then(() => console.log('promise inside timeout'));
}, 0);

Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => {
    fs.readFile(__filename, () => {
        console.log('file readed 2');
    });
})

console.log('end');
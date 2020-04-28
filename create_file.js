var fs = require('fs');

fs.writeFile('untitled.txt', 'Hello FS NodeJS', function(err) {
    if (err) throw err;
    console.log('File written success');
});
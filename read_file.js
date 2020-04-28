var fs = require('fs');

fs.readFile('./untitled.txt', function(err, data) {
    if(err) throw err;
    console.log('Read data from file : ' + data);
});
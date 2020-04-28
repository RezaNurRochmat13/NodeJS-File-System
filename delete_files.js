var fs = require('fs');

fs.unlink('./untitled.txt', function(err) {
    if(err) throw err;
    console.log('Deleted')
});
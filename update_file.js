var fs = require('fs');

fs.writeFile('./untitled.txt', 'Nama saya Rejak Nur Rochmat', function(err) {
    if(err) throw err;
    console.log('Updated');
});
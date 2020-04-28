var fs = require('fs');

fs.rename('./untitled.txt', 'skribbl.html', function(err) {
    console.log('Renamed!');
});
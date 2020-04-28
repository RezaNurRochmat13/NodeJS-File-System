var fs = required('fs');

fs.appendFile('./untitled.txt', 'Nama saya Rejak Nur Rochmat', function(err) {
    if(err) throw err;
    console.log('Updated');
});
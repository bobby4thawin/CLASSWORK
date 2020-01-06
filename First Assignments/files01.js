var filesys = require('fs');

filesys.readFile('text01.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var arrayData = Array(data);
    console.log(ArrayData[2]);


});
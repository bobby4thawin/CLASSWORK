var fileFoo = require('fs');

fileFoo.readFile('load_dept_names.txt', 'utf8', function(error, fileData){
    if (error) throw(error);

    console.log(fileData);

})

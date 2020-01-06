var fsys = require('fs');

fsys.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if (err) throw(err)

    var newData = data.replace(/\(|\'|\)/g, "");

    newData = newData.split("\n");
    console.log(newData);

    for (var i = 0; i < newData.length; i++) {
        console.log(newData[i].substring(0,newData[i].length-1));
        


    }

    

    


});
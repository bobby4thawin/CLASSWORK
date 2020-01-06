var filesys = require('fs');

filesys.readFile('load_dept_name.txt', 'utf8', function(err, data) {
    if(err) throw err;
    
    // var arrayData = data.split(',');
    // console.log(arrayData[2]);
    
    var deptData = data.replace('INSERT INTO `departments` VALUES', '');
    newData = newData.replace(/\(\'/g, "");
    console.log(newData);
    //newData. = newData.replace(/\(\'/g, "");

var array = var deptData.split("");
print(array);




});
                               
});
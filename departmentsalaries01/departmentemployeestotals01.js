var filesys = require("fs");

var departmentNames;
var departmentEmployee3d;

// 1. load_dept_names.txt

function deptNamesSync(){
    var fileData = filesys.readFileSync("load_dept_names.txt");
    fileData = fileData.toString();
    //console.log(fileData.toString());
    departmentNames = fileData.replace(/\(|\'|\)/g, "");
    departmentNames = departmentNames.split("\n");
    
    for (var i = 0; i < departmentNames.length; i++) {
      departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
      departmentNames[i] = departmentNames[i].split(",");
    }
    
    departmentNames.shift();
    // console.log(departmentNames);

}

// 2. load_dept_emp.txt 

function departmentEmployeesSync() {
    var fileData = filesys.readFileSync("load_dept_emp.txt", "utf8");
    departmentEmployees = fileData.replace(/\INSERT INTO `dept_emp` VALUES |\(|\'|\)/g, "").replace(/^\s*/gm, '');
    departmentEmployees = departmentEmployees.split("\n");


    for (var i = 0; i < departmentEmployees.length; i++) {
      departmentEmployees[i] = departmentEmployees[i].substring(0, departmentEmployees[i].length - 1);
      departmentEmployees[i] = departmentEmployees[i].split(",");
    }
      departmentEmployees.pop();

    // console.log(departmentEmployees);

    var departmentEmployees3d = [];
    for (var i = 0; i < departmentNames.length; i++) {
        departmentEmployees3d[i] = [];
    }
  
    // console.log(departmentEmployees3d);
    
    var correctIndex;
    for(var i = 0; i < departmentEmployees.length; i++) {
        for(var j = 0; j < departmentNames.length; j++) {
          correctIndex = departmentEmployees[i][1];

        }
    }
    // console.log(departmentEmployees[0][1]);

}
deptNamesSync();
departmentEmployeesSync();
var filesys = require("fs");
//file system method call back funciton
function deptnames() {
  // 1.
  var data = filesys.readFileSync("load_dept_names.txt", "utf8"); 
  
  
    // if (err) throw err;
    var departmentNames = data.replace(/\(|\'|\)/g, "");
    departmentNames = departmentNames.split("\n");
    for (var i = 0; i < departmentNames.length; i++) {
      departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
      departmentNames[i] = departmentNames[i].split(",");
    }
    departmentNames.shift();
    console.log(departmentNames);
};
 
// 2.
  function deptemp() {
  var data = filesys.readFileSync("load_dept_emp.txt", "utf8");
    
  
  // if (err) throw err;
    var dtEmpData = data.replace("INSERT INTO `dept_emp` VALUES ", "");
    var dtEmpData = dtEmpData.replace(/\(|\'|\)/g, "");
    var tempDepartmentEmployee = dtEmpData.split("\n");
    // console.log(tempDepartmentEmployee);
    for (i = 0; i < tempDepartmentEmployee.length; i++) {
        tempDepartmentEmployee[i] = tempDepartmentEmployee[i].substring(0, tempDepartmentEmployee[i].length - 1).split(",");
      if (tempDepartmentEmployee[i] == "") {  
        
          tempDepartmentEmployee.splice(i, 1);
          i--;
      }
    }
 
    
 
 
    for (var i = 0; i < tempDepartmentEmployee.length; i++) {
         // console.log("temp:", tempDepartmentEmployee[i][1]);
    }
    console.log(tempDepartmentEmployee);
    // console.groupEnd("DeptEMP");
  };
 
deptnames();
console.log(' ');
deptemp();











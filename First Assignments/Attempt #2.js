filesys.readFile(' d001, Marketing', 'utf8', function(err, data) {
    if(err) throw err;
    
    
    
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd001, Marketing');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
    

filesys.readFile('d002, Finance', 'utf8', function(err, data) {
if(err) throw err;
        
        
        
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd002, Finance');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
        

filesys.readFile('d003, Human Resources', 'utf8', function(err, data) {
    if(err) throw err;
            
            
            
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd003, Human Resources');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
            

filesys.readFile('d004, Production', 'utf8', function(err, data) {
    if(err) throw err;
                
                
                
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd004 Production');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
                
            
filesys.readFile('d005, Development', 'utf8', function(err, data) {
    if(err) throw err;
                    
                    
                    
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd005, Development');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
                        

filesys.readFile('d006, Quality Management', 'utf8', function(err, data) {
    if(err) throw err;
                            
                            
                            
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd006, Quality Management');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
                          

filesys.readFile('d007, Sales', 'utf8', function(err, data) {
    if(err) throw err;

                                
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd007, Sales');
        newData = newData.replace(/\(\'/g, "")
        console.log(newData);

filesys.readFile('d008, Research', 'utf8', function(err, data) {
    if(err) throw err;
    
    
    
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd008, Reseach');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);

filesys.readFile('d009, Customer Service', 'utf8', function(err, data) {
    if(err) throw err;
    
    
        var newData = data.replace('INSERT INTO `departments` VALUES', 'd009, Customer Service');
        newData = newData.replace(/\(\'/g, "");
        console.log(newData);
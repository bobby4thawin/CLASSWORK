function titleCase(str) {
    var newSring = "";
    var words = str.split(" ");
    
    var upperCaseFirstLetter;
    var remainingLetters;
    
    for (let i = 0; i < words.length; i++) {
      
      upperCaseFirstLetter = words[i][0].toUpperCase();
      remainingLetters = words[i].substring(1);
      
      newString += upperCaseFirstLetter+remainingLetter+" ";
    }
    
    console.log(newSring);
    return str;
}
  

titleCase("I'm a little tea pot");
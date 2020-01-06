function confirmEnding(str, target) {
    const strLastLetters = str.substring(str.length - target.length);
    
    if (strLastLetters == target) {
        return true;
    } else {
        return false;
    }
  }
  
  console.log(confirmEnding("Bastian", "n"));
  
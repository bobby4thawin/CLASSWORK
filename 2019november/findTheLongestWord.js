function findLongestWordLength(str) {
  var longestWord = str.split(" ");
  console.log(longestWord);
  for (var i = 0; i < longestWord.length; i++) {
      var longest = 0; 
      var long = " ";
      if (longestWord[i].length > longest) {
           longest = longestWord[i].length;
          long = longestWord[i];
        
      } 
      console.log(long);
        
    }
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
  var longestWord = str.split(" ");
  var longest = 0; 
  for (var i = 0; i < longestWord.length; i++) {
      
      var long = " ";
      if (longestWord[i].length > longest) {
           longest = longestWord[i].length;
           console.log(longest);
          long = longestWord[i];
          console.log(long);
        
      } else {

      }
      

    //   console.log(long);
        
    }
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

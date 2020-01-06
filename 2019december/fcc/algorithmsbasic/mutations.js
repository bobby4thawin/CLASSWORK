function mutation(arr) {
    let word2 = arr[1].toLowerCase().split("");
    let totalCharacters = word2.length;
    let counter = 0;
    
    for (let i = 0; i < word2.length; i++) {
        if (arr[0].toLowerCase().includes(word2[i])){
            // console.log('Bingo!');
            counter++;
        }
    }
    console.log(totalCharacters);
    console.log(counter);

    if (counter == totalCharacters) {
        console.log(true);
        return true;
    } else {
        console.log(false);
      return false;
    }

    // return arr;
  }
  
  mutation(["hello", "hey"]);
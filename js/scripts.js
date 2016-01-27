function gameObj() {
  // var words = ["allosaurus", "brachiosaurus", "diplodocus", "iguanodon", "stegosaurus", "triceratops", "velociraptor", "ankylosaurus"]; will be used, just not for specs
  var words = ["allosaurus"]; //array should be empty, allo' is for specs
//picks a random word from dinosaur array
  this.randomWord = words[Math.floor(Math.random() * words.length)];
//splits random word into individual letter array
  this.randomWordArray = this.randomWord.split('');
};
//replaces all letters in array with underscores
gameObj.prototype.lettersSwap = function() {
  this.output = this.randomWord.replace(/[A-Za-z]/ig, "_ ");
  return this.output;
};

//checks array to see if users guess letter is present
gameObj.prototype.guess = function(letter) {
  for ( var i = 0; i < this.randomWordArray.length; i++) {
    if (this.randomWordArray[i] === letter) {
      console.log(true);
      // this.randomWordArray.push(letter);
      return true;
    } else {
      console.log(false);
     //make leg or something
    }
  }
};




// $(document).ready(function() {
//   $("form#inquiry").submit(function(event) {
//     var word = $("input#userInput").val();
//     var result = vowelSwap(word);
//
//   // $("span#result").show();
//   document.write(result);
//   $("span#puzzle").text(result);

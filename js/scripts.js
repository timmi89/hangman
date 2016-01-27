function gameObj() {
  // var words = ["allosaurus", "brachiosaurus", "diplodocus", "iguanodon", "stegosaurus", "triceratops", "velociraptor", "ankylosaurus"]; will be used, just not for specs
  var words = ["allosaurus"]; //array should be empty, allo' is for specs
  this.randomWord = words[Math.floor(Math.random() * words.length)];
  this.randomWordArray = this.randomWord.split('');
};

gameObj.prototype.lettersSwap = function() {
  this.output = this.randomWord.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, "_ ");
  return this.output;
};


gameObj.prototype.guess = function(letter) {

  for ( var i = 0; i < this.randomWordArray.length; i++) {
    if (this.randomWordArray[i] === letter) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };
};




// $(document).ready(function() {
//   $("form#inquiry").submit(function(event) {
//     var word = $("input#userInput").val();
//     var result = vowelSwap(word);
//
//   // $("span#result").show();
//   document.write(result);
//   $("span#puzzle").text(result);

describe('gameObj', function() {
  it("Creates a game object with a random word and a split version of the word.", function() {
    var newGame = new gameObj();
    // expect(newGame.randomWord).to.be.a('string');
    // expect(newGame.randomWordArray).to.be.a('array');
    expect(newGame.randomWord).to.equal('allosaurus');
    expect(newGame.randomWordArray).to.eql(['a','l','l','o', 's','a','u','r','u','s']);
  });
  it("Creates a new string that replaces the letters with underscores.", function() {
    var newGame = new gameObj();
    expect(newGame.lettersSwap('allosaurus')).to.equal('_ _ _ _ _ _ _ _ _ _ ');
    // it("Will replace letters with underscores.", function() {   var newGame = new gameObj();
    //   expect(newGame.lettersSwap()).to.equal('_ ');
    // });
  });
  it("Checks the users letter that they guessed to see if it's correct", function() {
    var newGame = new gameObj();
    expect(newGame.guess('a')).to.equal(true);
  });
});

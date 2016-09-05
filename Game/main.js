var Game = require('./game.js');

var modal = document.getElementById('myModal');
var startButton = document.getElementById("main-button");


var kick = function(){
  modal.style.display = "block";
  submitName.disabled = false;
  };
var closeModal = function(event){
  event.preventDefault();
  modal.style.display = "none";


};
var secondKick = function(event){

  var userInput = document.getElementById('user-input');
  var UserName = userInput.value;
  closeModal(event);

  var game = new Game(UserName, 3);
  submitName.removeEventListener('click', secondKick);
  startButton.style.display = "none"; 
  game.startGame();
};

  //var newContent = document.createTextNode("Hi there and greetings!");

  startButton.addEventListener('click', kick);

var span = document.getElementsByClassName("close")[0];
var submitName= document.getElementById('user-input-button');
submitName.addEventListener('click', secondKick);


// When the user clicks on <span> (x), close the modal



// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event){
  if (event.target === modal) {
    modal.style.display = "none";
  }

});



  // add the newly created element and its content into the DOM

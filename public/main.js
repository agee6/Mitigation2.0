
var util = {
  fetchBookResults: function(query){
    var uri = "https://www.googleapis.com/books/v1/volumes?q="+query ;
    $.get(uri, {}, function(bookList){

      //ApiActions.ReceiveActions(bookList);
    });

  },

  logoutUser: function(){

    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      success: function(payload){
        console.log("deleted");
        //ApiActions.receiveUser(payload);
      }
    });

  },
  startGame: function(string){
    //get user input
    //Do hash

    // send hash as the API
    console.log('banana');
    var gameCode = window.btoa(string);
    $.post({
      url: '/api/session',
      data:{gameCode: gameCode},
      success: function(payload){
        console.log('new game started');
        socket.emit('addPlayer', "player1"); 
      }
    });


  }
};

var socket = io();


var startButton = document.getElementById('start-game');

startButton.addEventListener('click', function(event){
  event.preventDefault();
  util.startGame("banana");

});

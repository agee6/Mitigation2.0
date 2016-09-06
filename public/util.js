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
  starGame: function(string){
    //get user input
    //Do hash

    // send hash as the API

    var gameCode = string.hashCode();
    $.post({
      url: '/api/session',
      success: function(payload){
        console.log('new game started');
      }
    }); 


  }


};

module.exports = util;

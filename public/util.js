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
  starGame: function(){
    //get user input
    //Do hash

    // send hash as the API

    


  }


};

module.exports = util;

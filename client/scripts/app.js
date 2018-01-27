// YOUR CODE HERE:
// var request = (type, message) => {
//   $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     // url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//     url: this.server,
//     type: type,
//     data: message,
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message sent');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to send message', data);
//     }
//   });
// };
var myVar;
//= [{createdAt: "2017-12-08T20:55:12.526Z",
//   objectId: "hEG6XDGsEE",
//   text: "cat was here",
//   updatedAt: "2017-12-08T20:55:12.526Z",
//   username: "cat"}]; //get data




//example data:

// var Array = [{
// createdAt: "2017-12-08T20:55:12.526Z"
// objectId: "hEG6XDGsEE"
// text: "cat was here"
// updatedAt: "2017-12-08T20:55:12.526Z"
// username: "cat"
//},...];

var app = {
  // server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  init: () => {
    app.handleUsernameClick();
    app.handleSubmit();
  },
  send: (message) =>{
    // request('POST', message);
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: (message) => {
    // request('GET', message);

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: {order: '-createdAt'},
      contentType: 'application/json',
      // dataType: 'jsonp',
      success: function (data) {
        console.log('chatterbox: Message received', data);
        // return this.data;
        myVar = data;
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages: () => {
    $('#chats').empty(); 
  },
  renderMessage: (newMessage) => {
    var message = `<blink>${newMessage.text}</blink>`;
    $('#chats').html(message);
  },
  renderRoom: (roomName) => {
    var room = `<option value=${roomName.roomname}>${roomName.roomname}</option>`;
    $('#roomSelect').html(room);
  },
  handleUsernameClick: () => { 
    // $('.username').on('click', (event) => {
      
    // });
    return 'hello';
  },
  handleSubmit: () => {
    // $('.submit').on('click', (event) => {
      
    // });
    return 'goodbye';
  },
  postMesage: () => {
    var index = 20;
    while (index >= 0) {
      if (myVar.results[index].text !== undefined) {
        var messages = encodeURI(myVar.results[index].text);
        var name = JSON.stringify(myVar.results[index].username); 
        var $post = $('<blink></blink>');
        $post.html(`${name}: ${messages}`);
        $post.appendTo('#chats');
      }
      index -= 1;
    }
  }
  
};

// set interval to fetch messages => save old data somewhere and append new instances to the body 
/*setInterval(() => {
  app.fetch();
  app.postMesage();
}, 5000);*/


$(document).ready(function() {
  
    // app.postMesage();
  // $('.submit').on('click', function(event) {

  //   $('body').append($node);  
  // });

  // $('.username').on('click', function(event) {

  //   $('body').append($node);  
  // });
});

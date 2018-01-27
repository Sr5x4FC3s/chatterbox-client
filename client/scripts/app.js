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
      data: message,
      contentType: 'application/json',
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
  }
  
};

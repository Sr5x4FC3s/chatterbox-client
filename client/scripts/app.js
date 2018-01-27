// YOUR CODE HERE:
var app = {
  init: () => {
    app.handleUsernameClick();
    app.handleSubmit();

  },
  send: (message) =>{
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
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
  fetch: () => {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: undefined,
      type: 'GET',
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
    $('.username').on('click', (event) => {
      
    });
  },
  handleSubmit: () => {
    $('.submit').on('click', (event) => {
      
    });
  }
  
};

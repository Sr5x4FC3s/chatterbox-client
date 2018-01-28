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


var filter = (array) => { // myVar.results
  var filteredArr = [];
  var arr = [];
  array.forEach(x => {
    if (x.roomname) {
      arr.push(x.roomname);
    } 
  });
  for (var i = 0; i < arr.length; i++) {
    if (!filteredArr.includes(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

//example data:

// var Array = [{
// createdAt: "2017-12-08T20:55:12.526Z"
// objectId: "hEG6XDGsEE"
// text: "cat was here"
// updatedAt: "2017-12-08T20:55:12.526Z"
// username: "cat"
//},...];

var userMessage = ''; // this will hold text from this.handleSubmit
var userRoom = '';


var app = {
  // server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  init: () => {
    app.fetch();
    app.renderMessage();
    app.renderRoom();
    // app.handleUsernameClick();
    // app.handleUsernameClick();
    // app.handleSubmit();
  },
  send: (message) =>{
    // request('POST', message);

    var createObject = (room, text) => {
      var getUserIndex = window.location.search.indexOf('=');
      var getUser = window.location.search.slice(getUserIndex + 1);
      var objTemplate = {
        roomname: room,
        text: text,
        username: getUser
      };
      return objTemplate;
    };
    var message = createObject(userRoom, userMessage);
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
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
  renderMessage: () => {
    var index = myVar.results.length - 1;
    while (index >= 0) {
      if (myVar.results[index].text !== undefined) {
        var messages = _.escape(myVar.results[index].text);
        var name = _.escape(myVar.results[index].username); 
        var username = (`<a href="" class= "${name}">${name}</a>`);
        var $post = $('<div></div>');
        // figure out how to decode here!
        $post.html(`${username}: ${messages}`);
        $post.appendTo('#chats');
      }
      index -= 1;
    }
  },
  renderRoom: () => {
    var filteredRooms = filter(myVar.results); // will be an array 
    var index = filteredRooms.length - 1;
    while (index >= 0) {
      var room = _.escape(filteredRooms[index]);
      var $room = $(`<option value="${room}"></option>`);
      // figure out how to decode here!
      $room.html(`${room}`);
      $room.appendTo('#roomSelect');
      index -= 1;
    }  
  },
  handleUsernameClick: () => { 
    // $('.username').on('click', (event) => {
      
    // });
    alert('hello');
  },
  handleSubmit: () => {
    $('.submit').on('click', (event) => {
      userMessage = $('#currentMessage').val();
      userRoom = $('#roomSelect').val();
      app.send();
    });
  },
  handleRoomSubmit: () => {
    $('.roomSubmit').on('click', (event) => {
      var userRoom = $('#newRoom').val();
      var room = _.escape(userRoom);
      var $room = $(`<option value="${room}"></option>`);
      // figure out how to decode here!
      $room.html(`${room}`);
      $room.appendTo('#roomSelect');
    });
  }
};

// set interval to fetch messages => save old data somewhere and append new instances to the body 
app.init();


$(document).ready(function() {

  app.handleSubmit();
  app.handleRoomSubmit();
  setInterval(() => {
    app.init();
  }, 15000);

});

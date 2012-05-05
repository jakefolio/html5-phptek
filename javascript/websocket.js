/*
Websockets have different versions, early versions removed from FF 3 and 4 for security issues.
Instant communication, no HTTP request necessary
WS are great for multiplayer games, chat and live streams.
Great client and server lib is socket.io
SUPPORT: check out caniuse.com for current support
CONSTANTS:
CONNECTING = 0
OPEN = 1
CLOSING = 2
CLOSED = 3
*/

if (window.WebSocket) {
	// Supported
	var ws = new WebSocket('ws://html5rocks.websocket.org/echo');

	// When the connection is open, send some data to the server
	ws.onopen = function () {
	  ws.send('Ping'); // Send the message 'Ping' to the server
	};

	// Log errors
	ws.onerror = function (error) {
	  console.log('WebSocket Error ' + error);
	};

	// Log messages from the server
	ws.onmessage = function (e) {
	  console.log('Server: ' + e.data);
	};

	// Say hello
	ws.send('Hello World');

	// Close the connection
	ws.close();
}
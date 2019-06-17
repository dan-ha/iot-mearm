const http = require('http');
const socketIO = require('socket.io');

const MeArm = require('./robotic-arm');
const RemoteController = require('./remote-controller.js');

const PORT = 5000;

const server = http.createServer();
server.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
});

// Initialize j5 board
const meArm = new MeArm();

var io = socketIO(server, { origins: '*:*'});
io.on('connection', function (socket) {
    console.log('new connection');
    new RemoteController(socket, meArm);
});
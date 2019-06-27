class RemoteController {
    constructor(socket, meArm) {
        this.socket = socket;
        this.roboticArm = meArm;

        this.setSocketListeners();
    }

    setSocketListeners() {

        this.socket.on('turn', (degrees) => {
            console.log(`Turn: ${degrees}deg`);
            this.roboticArm.turn(degrees);
        });

        this.socket.on('forward', (degrees) => {
            console.log(`Forward: ${degrees}deg`);
            this.roboticArm.forward(degrees);
        });

        this.socket.on('lift', (degrees) => {
            console.log(`Lift: ${degrees}deg`);
            this.roboticArm.lift(degrees);
        });

        this.socket.on('rotate', (degrees) => {
            console.log(`Rotate: ${degrees}deg`);
            this.roboticArm.rotate(degrees);
        });

        this.socket.on('grip', (degrees) => {
            console.log(`Grip: ${degrees}deg`);
            this.roboticArm.grip(degrees);
        });
    }
}

module.exports = RemoteController;
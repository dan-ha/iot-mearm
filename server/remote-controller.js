class RemoteController {
    constructor(socket, meArm) {
        this.socket = socket;
        this.roboticArm = meArm;

        this.setSocketListeners();
    }

    setSocketListeners() {
        this.socket.on('lift', (degrees) => {
            console.log(`Lift: ${degrees}deg`);
            this.roboticArm.lift(degrees);
        });

        this.socket.on('liftAdjust', (degrees) => {
            console.log(`LiftAdjust: ${degrees}deg`);
            this.roboticArm.liftAdjust(degrees);
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
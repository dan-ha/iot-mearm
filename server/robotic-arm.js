var five = require("johnny-five");

class MeArm {

    constructor(basePin = 3, rightPin = 4, leftPin = 5, rotatePin = 6, clawPin = 7) {
        this.board = new five.Board();
        this.board.on("ready", () => {
            this.servoBase = new five.Servo({ pin: basePin, startAt: 90 })
            this.servoBodyRight = new five.Servo({ pin: rightPin, startAt: 90 });
            this.servoBodyLeft = new five.Servo({ pin: leftPin, startAt: 90 });
            this.servoClawRotate = new five.Servo({ pin: rotatePin, startAt: 90 });
            this.servoClawGrip = new five.Servo({ pin: clawPin, range: [0, 60], startAt: 30 });
        });
    }

    turn(degrees) {
        this.servoBase.step(degrees);
    }

    forward(degrees) {
        this.servoBodyRight.step(degrees);
    }

    lift(degrees) {
        this.servoBodyLeft.step(degrees);
    }

    rotate(degrees) {
        this.servoClawRotate.step(degrees);
    }

    grip(degrees) {
        this.servoClawGrip.step(degrees);
    }

}

module.exports = MeArm;
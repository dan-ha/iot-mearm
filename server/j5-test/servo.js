var five = require("johnny-five");

const PIN_SERVO_BASE = 4;
const PIN_SERVO_LEFT = 5;
const PIN_SERVO_RIGHT = 6;
const PIN_SERVO_CLAW = 7;

var controlSpeed = 2;

var board = new five.Board();

board.on("ready", function () {
    var servoBase = new five.Servo(PIN_SERVO_BASE);
    var servoLeft = new five.Servo(PIN_SERVO_LEFT);
    var servoRight = new five.Servo(PIN_SERVO_RIGHT);

    var servoClaw = new five.Servo({
        id: "claw",
        pin: PIN_SERVO_CLAW,
        range: [0, 45],
        center: true
    });
    let servos = new five.Servos([servoBase, servoLeft, servoRight, servoClaw])

    // physical buttons for easier testing
    var btnOpen = new five.Button({
        pin: 3,
        holdtime: 50
    });
    var btnClose = new five.Button({
        pin: 2,
        holdtime: 50
    });

    btnOpen.on("hold", function () {
        servoBase.step(-2);
    });

    btnClose.on("hold", function () {
        servoBase.step(2);
    });

    // Add servos to REPL
    this.repl.inject({
        servoBase,
        servoLeft,
        servoRight,
        servoClaw,
        servos,
        controlSpeed
    });
});
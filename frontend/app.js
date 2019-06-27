new Vue({
    el: '#app',
    created() {
        this.socket = io('http://localhost:5000')
    },
    data: {
        speed: 1
    },
    methods: {
        turn: function (val) {
            this.socket.emit('turn', val * this.speed);
        },
        forward: function (val) {
            this.socket.emit('forward', val * this.speed);
        },
        lift: function (val) {
            this.socket.emit('lift', val * this.speed);
        },
        rotate: function (val) {
            this.socket.emit('rotate', val * this.speed);
        },
        grip: function (val) {
            this.socket.emit('grip', val * this.speed);
        }
    }
})
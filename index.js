require('dotenv').config()
const bitsocketd = require('fountainhead-bitsocketd')
bitsocketd.init({
    bit: {
        host: process.env.zmq_outgoing_host ? process.env.zmq_outgoing_host : '0.0.0.0',
        port: Number.parseInt(process.env.zmq_outgoing_port ? process.env.zmq_outgoing_port : 28339)
    },
    socket: {
        port: process.env.bitsocket_port ? process.env.bitsocket_port : 3000
    },
    heartbeat: 10
});


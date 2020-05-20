const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter{
    log(msg)
    {
        console.log("before emitting")
        this.emit('message', { id : uuid.v4(), msg : msg})
        console.log("after emitting")
    }
}

const logger = new Logger();

logger.on('message', (data) => {
    console.log('inside on')
    console.log('Called Listener: ', data)
})

logger.log('Hello World')

module.exports = Logger
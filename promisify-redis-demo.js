const { promisify } = require('util')
const redis = require('redis')
const client = redis.createClient('6379', '127.0.0.1', { prefix: 'my:' })

const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)
function setFoo() {
    return setAsync('lua', 'lucas')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

function getFoo() {
    return getAsync('lua').then(res => {
        console.log(res)
    })
}
setFoo()
getFoo()
client.quit()
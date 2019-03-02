// src/index.ts

import * as express from 'express'
//import * as cors from 'cors'
//import * as bodyParser from 'body-parser'

const defaults = {
    _port: 4001
}

const app = express()
app.set("port", process.env.BEAR_APP_PORT || defaults._port)


//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())

app.get('/', (req, res, next) => {
    res.json('Hello world')
    console.log('Hello Console World')
})

app.listen(app.get("port"), (p) => {
    console.log(`App is listening on port ${app.get("port")}`)
})

// Export our app
export default app;
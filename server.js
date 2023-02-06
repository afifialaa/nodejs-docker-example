const express = require('express')
const app = express()

const User = require('./models/user-model')

require('./db-config')

const bodyParser = require('body-parser')

const cors = require('cors')
const path = require('path')

let public = path.join(__dirname, 'public')

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/home', (req, res)=>{
    res.sendFile(path.join(public, 'index.html'))
})


app.post('/user', (req, res)=>{
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    let userObj = new User(user)

    userObj.save((err, result)=>{
        if(err) {
            return res.json({'msg': 'Failed to create document'})
        }
        return res.json({'msg': 'Document was created'})
    })
})

app.listen(8080, ()=>{
    console.log('server is running at port ', 8080)
})

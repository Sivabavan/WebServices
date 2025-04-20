const express = require("express")
const req = require("express/lib/request")
const app = express()
const port = 3002


const user_route = require('./user/userrouter')
const comment_route = require('./comment/commentrouter')


app.use(express.json())
app.use('/user', userroute)
app.use('/post', commentroute)

app.listen(port, () => {
    console.log("App is running on port number " + port);
})
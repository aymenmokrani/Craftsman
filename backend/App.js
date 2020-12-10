const express = require('express')
const app = express()
const port = 4000

app.get('/getmedata', (req, res)=> {
    res.send('here is your data chief')
})
 
app.listen(port, () => {console.log(`listening to ${port}`);})
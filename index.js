const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello India</h1>')
})
app.get('/login',(req,res)=>{
    res.send("Login page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
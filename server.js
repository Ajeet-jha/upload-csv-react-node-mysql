const express = require('express')
const app = express()
var cors = require('cors')
const port = 4000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/upload",(req, res) => {
  console.log("data",req);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
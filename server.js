const express = require("express")
const app = express();
const fs = require('fs')
const index = fs.readFileSync('index.html')
const port = 80;

app.use('/static', express.static('static'))

app.get('/', (req, res)=>{
  res.writeHead(200, {"Content-type":"text/html"})
  res.end(index)
})

app.listen(port, ()=>{
  console.log("Server is listening on port 80")
})

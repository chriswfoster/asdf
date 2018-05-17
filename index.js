const express = require("express")
const { json } = require("body-parser")
const cors = require("cors")

const port = 3333

const app = express()
app.use(express.static(`${__dirname}`))

app.use(json())
app.use(cors())

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})

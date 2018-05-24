const express = require("express")
const app = express()

app.get("/userList", (req, res) => {
  res.send("I will send you userList")
})
app.get("/api/adminList", (req, res) => {
  res.send("I will send you adminList")
})
const server = app.listen(3002, () => {
  console.log(
    `test-server on ${server.address().address}:${server.address().port}`
  )
})

const express = require("express")
const app = express()

const proxy = require("http-proxy-middleware")

const options = {
  target: "http://localhost:3002",
  changeOrigin: true,
  pathRewrite: {'^/api' : '/'}
}
const exampleProxy = proxy("/api", options)

app.use(exampleProxy)
app.use("/", express.static("../admin"))
console.log(`test server on http://localhost:3000`)
app.listen(3000)

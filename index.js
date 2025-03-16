require('dotenv').config()
const express = require('express') //CommonJS syntax, used in traditional Node.js projects.
// import express from 'express'    ES Modules syntax, used in modern JavaScript (Node.js with "type": "module" or browsers).
const app = express()  // sets up your Express application so you can build and run your server

const port = 4000  //virtual port

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
// app.get()             : This is a method provided by Express to handle HTTP GET requests.

// '/'                   :        The root path of your server

// (req, res) => { ... } : This is a callback function that runs when the route is accessed.
// req (request): Contains information about the incoming HTTP request (e.g., query parameters, headers, body).
// res (response): Used to send a response back to the client.

// res.send()            : Sends a response (can be a string, JSON, HTML, etc.).

app.get('/twitter', (req,res) =>{
  res.send('pranavbhoir@gmail.com')
})
app.get('/login', (req,res) =>{
 res.send('<h1>please login at user</h1>') 
})
app.get('/youtube',(req,res) => {
  res.send('<h2>chai and yt</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 
// app.listen(port, () => { ... }):
//  This method starts the server and binds it to the specified port.
// The port is a number representing the network port (e.g., 3000, 8080).

//STOP AND RUN THE SERVER AGAIN IF PAGE FAILED TO RELOAD 
//INSTALL DOT ENV FILE (npm install dotenv)

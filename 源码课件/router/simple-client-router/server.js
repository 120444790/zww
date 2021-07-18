const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

function htmlTpl(content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <a onclick='clickRoute("home")'>home</a>
    <a onclick='clickRoute("about")'>about</a>
    <div id="app">${content}</div>
    <script>
      const $app = document.getElementById('app')
      const map = {
        home: function() {
          $app.innerHTML = 'home'
        },
        about: function() {
          $app.innerHTML = 'about'
        }
      }

      function clickRoute(route) {
        history.pushState(route, route, route);
        const renderFunc = map[route]
        renderFunc()
      }

    </script>
  </body>
  </html>
  `
}

app.get('/home', function(req, res) {
  res.send(htmlTpl('home'))
})

app.get('/about', function(req, res) {
  res.send(htmlTpl('about'))
})

app.listen(8888, () => {
  console.log('server started');
})

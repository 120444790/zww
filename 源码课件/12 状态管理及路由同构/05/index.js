const Vue = require('vue')
const createRenderer = require('vue-server-renderer').createRenderer
const express = require('express')

const fs = require('fs')
const path = require('path')

const app = express()

app.get('*', function(req, res) {
    const vm = new Vue({
        data: {
            count: req.url
        },
        template: '<div>{{count}}</div>'
    })

    const renderer = createRenderer({
        template: fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')
    })
    
    renderer.renderToString(vm, (err, html) => {
        res.end(html)
    })
})

app.listen(8888)

const Vue = require('vue')
const createRender = require('vue-server-renderer').createRenderer
const express = require('express')

const fs = require('fs')
const path = require('path')


const app = express()

app.get('*',(req,res) => {

    const vm = new Vue({
        data:{
            count:req.url
        },
        template:'<div>{{count}}</div>'
    });
    
    const render = createRender({
        template:fs.readFileSync(path.resolve(__dirname,'./index.template.html'),'utf-8')
    })
    
    render.renderToString(vm,(err,html) => {
        res.send(html)
    })
})

app.listen(8888)

const express = require('express')
const fs = require('fs')
const path = require('path')
const renderer = require('vue-server-renderer').createRenderer({
    // template: fs.readFileSync(path.resolve(__dirname, '../src/index.template.html'), 'utf-8')
})

const {createApp} = require('./index')

const app = express()

app.use('/dist', express.static(path.join(__dirname, './dist')))

app.get('/build.js', function(req, res) {
    const pathUrl = path.resolve(process.cwd(), './dist/build.js');
    console.log(pathUrl)
    res.sendFile(pathUrl)
})

app.get('*', function(req, res) {
    const url = req.url
    const {vm, router, store} = createApp()
    router.push(url)
    const matchdComponent = router.getMatchedComponents()
    if (!matchdComponent) {
        // 404
    } else {
        renderer.renderToString(vm, function(err, html) {
            
            res.send(
                `
                    <html>
                        <body>
                            <div id="app">${html}</div>
                            <script>window.store = ${JSON.stringify(store.state)}</script>
                            <script src="/build.js"></script>
                        </body>
                    </html>
                `
            )
        })
    }
})

app.listen(8080)
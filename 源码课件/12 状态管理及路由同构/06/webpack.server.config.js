const path = require('path')
const webpack = require('webpack')

const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')

const config = merge(baseWebpackConfig, {
    target: 'node',
    entry: {
        app: './src/entry-server.js'
    },
    output: {
        path: __dirname,
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    }
})
console.log(config)
module.exports = config
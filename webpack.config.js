var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/client/router.js',
    output: {
        path: __dirname + '/client/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015,presets[]=react'
            },
            {
                test: /\.less$/,
                // loader: 'style!css!less'
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }/*,
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract("style-loader","css-loader")
            }*/
        ]
    },
    plugins: [new ExtractTextPlugin("main.css")]
}
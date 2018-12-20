const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './js/index.js'
    ,output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'my.bundle.js'
    }
    ,mode: 'development'
    ,devServer: {
         contentBase: './dist'
    }
    ,devtool : 'source-map'
    ,module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
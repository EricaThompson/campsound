const path = require('path');

module.exports = {
    entry: './frontend/campsound.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
        
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    }
};
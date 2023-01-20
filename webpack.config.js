const path = require('path');

module.exports = {
    mode: 'development',
    entry: './code/main.js',
    devServer: {
        static: {
          directory: path.join(__dirname, 'code'),
        },
    },
    module: {
        rules: [
            {
                test: /\.png$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(tff|woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}   